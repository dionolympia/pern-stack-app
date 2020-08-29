import React, { Fragment } from "react";

const LandingPage = () => {
  return (
    <Fragment>
      <header className="masthead text-white text-center" id="landing-page">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-5">Todo-List Tool</h2>

              <h5>
                {/* This tool would allow answers to managed, displayed and answered
                dynamically. The ability to share the responses with other (via
                export or some other means) would eliminate the need to enter
                them manually in another tool. */}
                This is a simple todo list application using the PERN stack
                (PostgreSQL, Express.js, ReactJS, and Node.js). Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Modi corrupti
                facere necessitatibus error sequi! Saepe perferendis.
              </h5>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              {/* <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Sign up!
                    </button>
                  </div>
                </div>
              </form> */}
              <p className="mt-4">Get started below!</p>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default LandingPage;
