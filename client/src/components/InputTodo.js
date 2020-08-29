import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h3 className="text-center mt-5">Create a Todo</h3>
      <p className="text-center mt-3">
        Enter a description and click "Add" to add an item to the table:
      </p>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          autoFocus
          id="input-todo"
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
