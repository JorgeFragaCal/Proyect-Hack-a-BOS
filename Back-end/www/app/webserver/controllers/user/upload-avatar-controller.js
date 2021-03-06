"use strict";
const cloudinary = require("cloudinary");
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
cloudinary.config({
  cloud_name: process.env.CLOUDINARI_CLOUD_NAME,
  api_key: process.env.CLOUDINARI_API_KEY,
  api_secret: process.env.CLOUDINARI_API_SECRET
});

async function validate(payload) {
  const schema = Joi.object({
    userId: Joi.string().guid({
      version: [uuidv4]
    })
  });
  Joi.assert(payload, schema);
}

async function uploadAvatar(res, req, next) {
  const { file } = req;
  const { userId } = req.claims;
  const payload = {
    userId
  };
  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }
  if (!file || file.buffer) {
    return res.status(400).send({
      message: "upload image"
    });
  }
  cloudinary.v2.uploader
    .upload_stream(
      {
        resource_type: "image",
        public_id: userId,
        width: 300,
        height: 300,
        format: "jpg",
        crop: "limit"
      },
      async (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        const { secure_url: secureUrl } = result;
        const sqlQuery = `UPDATE user SET avatar=? WHERE id=?`;

        try {
          const connection = await mysqlPool.getConnetion();
          connection.execute(sqlQuery, [secureUrl, userId]);
          connection.release();
          console.log(result);
          res.header("Location", secureUrl);
          return res.status(201).send();
        } catch (e) {
          res.status(500).send({ message: e.message });
        }
      }
    )
    .end(file.buffer);
}
module.exports = uploadAvatar;
