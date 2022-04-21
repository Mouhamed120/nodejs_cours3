const User = require("../models/User");
const bcrypt = require("bcryptjs");

const RegisterUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.send("User with that email already exist");

  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    console.log(error.message);
  }
};
const LoginUser = (req, res) => {
  res.send("Hello world");
};

module.exports = { LoginUser, RegisterUser };
