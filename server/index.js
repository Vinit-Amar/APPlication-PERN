const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
//ROUTES//
//CREATE A TODO

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");

});