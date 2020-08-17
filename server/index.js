const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors()); // allows for cross
app.use(express.json()); // lets us use req.body

/* start of routes */

// create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get a specific todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const specTodo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json(specTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );
        res.json(
            "Todo with id:" +
                id +
                " was updated with description:'" +
                description +
                "'"
        );
    } catch (err) {
        console.error(err.message);
    }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo with id:" + id + " was deleted");
    } catch (err) {
        console.error(err.message);
    }
});

/* end of routes */

// Listening on port 5000
app.listen(5000, () => {
    console.log("server has started on port 5000");
});
