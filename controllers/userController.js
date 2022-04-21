const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
const LoginUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("User with that email is not found");

  // On verifie le mot de passe avec bcrypt
  const validatePasswordUser = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!validatePasswordUser) return res.send("password is not valid");

  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email
    },
    "123456",
    { expiresIn: "12h" }
  );

  res.send({ _id: user.id, email: user.email, token });
};

module.exports = { LoginUser, RegisterUser };
