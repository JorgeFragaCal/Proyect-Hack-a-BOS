"use strict";
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
const uuidV4 = require("uuid/v4");

async function validateSchema(payload) {
  const schema = Joi.object({
    title: Joi.string().required(),
    start_date: Joi.date().required(),
    address: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    price: Joi.string(),
    web: Joi.string()
  });
  Joi.assert(payload, schema);
}

async function createEvent(res, req, next) {
  const eventId = uuidV4();
  const eventData = { ...req.body };
  try {
    await validateSchema(eventData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  const { userId, role } = req.claims;
  if (true) {
    try {
      const connection = await mysqlPool.getConnection();
      const sqlInsercion = "INSERT INTO `Hackathones2`.`event` SET ? ";

      await connection.query(sqlInsercion, {
        id: eventId,
        title: eventData.title,
        start_date: eventData.start_date,
        country: eventData.country,
        city: eventData.city,
        description: eventData.description,
        image: eventData.image,
        email: eventData.email,
        web: eventData.web
      });
      connection.release();

      res.status(201).send("event created");
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  } else {
    return res.status(401).send("Unauthorized");
  }
}
module.exports = createEvent;
