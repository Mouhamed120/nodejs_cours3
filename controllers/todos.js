const Todo = require("../models/Todos");
const joi = require("joi");

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.send(todos);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
};
const deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete({ _id: req.params.id });
  if (!todo) return res.send("todo is not found");
  res.send(todo);
};
const createTodo = async (req, res) => {
  const { name, author, uid, isCompleted } = req.body;
  const todo = new Todo({ name, author, uid, isCompleted });
  try {
    await todo.save();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

module.exports = { getTodo, createTodo, deleteTodo };
