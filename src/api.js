const router = require("express").Router();
const mongosse = require("mongoose");
const { getTodo, createTodo, deleteTodo } = require("../controllers/todos");
const Todos = require("../models/Todos");
mongosse
  .connect(
    `mongodb+srv://ana:KyAx6OzFVzgSIto7@expressapi.bqunp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    router.get("/", getTodo);
    router.post("/", createTodo);
    router.delete("/:id", deleteTodo);
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = router;
