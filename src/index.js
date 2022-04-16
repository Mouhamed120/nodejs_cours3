const express = require("express");
const app = express();
const api = require("./api");

app.use(express.json());
app.use("/api", api);
console.log("Hello");

app.listen(8080, () => {
  console.log("backend is running on port 8080");
});
