import React, { Fragment } from "react";
import NavIcon from "../assessment-tool-icon.png";
// import NavIcon from "../cvp-logo.png";

const Header = () => {
  return (
    <Fragment>
      {/* <nav className="navbar navbar-expand-md static-top navbar-dark bg-dark">
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
      </nav> */}
      <nav className="navbar navbar-expand-md static-top navbar-dark bg-dark">
        <a className="navbar-brand text-white" href="">
          <img src={NavIcon} alt="Logo" style={{ maxHeight: "30px" }} />
          {/* Assessment Tool */}
          Todo List Tool
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
            <li className="nav-item ">
              <a className="nav-link" href="">
                Dashboard
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">
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
