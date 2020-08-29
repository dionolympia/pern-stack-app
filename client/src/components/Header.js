import React, { Fragment, useState } from "react";
import NavIcon from "../cvp-logo.png";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md static-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={NavIcon} alt="Logo" style={{ width: "75px" }} />
          Assessment Tool
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav nav">
            {/* <li className="nav-item">
              <a className="nav-link active" href="#Intro">
                Active Link Example
              </a>
            </li> */}
            <li className="nav-item px-3">
              <a className="nav-link" href="#Intro">
                Create Question
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#Calc">
                Preview Questions
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#Calc">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
