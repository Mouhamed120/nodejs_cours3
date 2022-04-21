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

const updateTodo = async (req, res) => {
  // on trouve le todo à modifier par son id
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send("Todo is not found");
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.send(updatedTodo);
};
const patchedTodo = async (req, res) => {
  // on trouve le todo à modifier par son id
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send("Todo is not found");
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { isCompleted: !todo.isCompleted },
    {
      new: true
    }
  );
  res.send(updatedTodo);
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

module.exports = { getTodo, createTodo, deleteTodo, updateTodo, patchedTodo };
