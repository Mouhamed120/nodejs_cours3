const router = require("express").Router();
const mongosse = require("mongoose");
const userController = require("../controllers/userControllers");

require("dotenv").config();
mongosse
  .connect(
    `mongodb+srv://ana:KyAx6OzFVzgSIto7@expressapi.bqunp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    router.get("/", userController.getUser);
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = router;
