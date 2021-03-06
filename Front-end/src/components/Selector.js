import React from "react";

export function Selector({ onSkillChange, type }) {
  return (
    <section id="section-radio">
      <section className="radio">
        <input
          id="1"
          type="radio"
          value="java"
          checked={type === "java"}
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="1">
          <i className="fab fa-java php"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="2"
          checked={type === "php"}
          type="radio"
          value="php"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="2">
          <i className="fab fa-php"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="3"
          checked={type === "javascript"}
          type="radio"
          value="javascript"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="3">
          <i className="fab fa-js"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="4"
          checked={type === "python"}
          type="radio"
          value="python"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="4">
          <i className="fab fa-python"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="5"
          checked={type === "C#"}
          type="radio"
          value="C#"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="5">
          <i className="fab fa-cuttlefish"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="6"
          checked={type === "nodejs"}
          type="radio"
          value="nodejs"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="6">
          <i className="fab fa-node"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="7"
          checked={type === "react"}
          type="radio"
          value="react"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="7">
          <i className="fab fa-react"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="8"
          checked={type === "angular"}
          type="radio"
          value="angular"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="8">
          <i className="fab fa-angular"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="9"
          checked={type === "html5"}
          type="radio"
          value="html5"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="9">
          <i className="fab fa-html5"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="10"
          checked={type === "css3"}
          type="radio"
          value="css3"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="10">
          <i className="fab fa-css3-alt"></i>
        </label>
      </section>
    </section>
  );
}
