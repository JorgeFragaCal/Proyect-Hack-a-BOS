import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MainMenu() {
  const [open, setOpen] = useState(true);
  return (
    <header>
      <nav className="menu">
        <ul className={` ${open ? "hidden" : ""}`}>
          <li>
            <Link to="/">
              <img src="/" alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/ranking">
              <i className="fa fa-trophy"></i> Ranking
            </Link>
          </li>
          <li>
            <Link to="/events">
              <i className="fa fa-calendar"></i> Events calendar
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-info-circle"></i> About us
            </Link>
          </li>
          <li>
            <Link to="/login">Log In</Link> | <Link to="/signup">Sign up</Link>
          </li>
        </ul>
        <button id="menu-button" onClick={e => setOpen(!open)}>
          <i className="fa fa-bars fa-lg"></i>
        </button>
      </nav>
      <div className={`site-overlay-active ${open ? "hidden" : ""}`}></div>
    </header>
  );
}
