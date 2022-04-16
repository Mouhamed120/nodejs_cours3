const Todo = require("../models/Todos");
const joi = require("joi");

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
};
const createTodo = async (req, res) => {
  const schema = joi.object({
    name: joi.string().min(3).max(200).required(),
    author: joi.string().min(3).max(30),
    uid: joi.string(),
    isCompleted: joi.boolean(),
    date: joi.date()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, author, uid, isCompplete } = req.body;
  const todo = new Todo({ name, author, uid, isCompplete });
  try {
    await todo.save();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

module.exports = { getTodo, createTodo };
