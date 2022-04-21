const router = require("express").Router();
const mongosse = require("mongoose");
const {
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  patchedTodo
} = require("../controllers/todos");
const { LoginUser, RegisterUser } = require("../controllers/userController");
const { verification } = require("../middlewares/auth");
mongosse
  .connect(
    `mongodb+srv://ana:KyAx6OzFVzgSIto7@expressapi.bqunp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    router.get("/todos", verification, getTodo);
    router.post("/todos", createTodo);
    router.delete("/todos:id", deleteTodo);
    router.put("/todos:id", updateTodo);
    router.patch("/toods:id", patchedTodo);
    // ===============================
    router.post("/register", RegisterUser);
    router.post("/login", LoginUser);

    // ==============================
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = router;
