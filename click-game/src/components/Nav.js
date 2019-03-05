import React from "react";
import "react-bootstrap";

import "./Nav.css";
const Nav = props => (
  <div>
    <nav className="navbar fixed-top">
      <div className="row">
        <div className="col-md-9 col-xl-9 col-lg-9">
          <ul>
            <li className="navbar-brand" id="title">
              <a href="/">The Ultimate Clicky Game</a>
            </li>
            <li className="navbar-text nav-item">{props.navbarMessage}</li>
          </ul>
        </div>

        <div className="col-md-3 col-xl-3 col-lg-3">
          <ul>
            <li className="navbar-text nav-item">
              Score: <p className="number">{props.score}</p>
              Top Score: <p className="number">{props.highScore}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
