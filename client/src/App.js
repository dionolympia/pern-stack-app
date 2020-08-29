import React, { Fragment } from "react";
import "./App.css";

// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <InputTodo />
            </div>
            <div className="col-md">
              <ListTodos />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
