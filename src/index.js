const express = require("express");
const app = express();
const api = require("./api");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", api);

const port = "8080";
app.listen(port, () => {
  console.log(`backend is running on port ${port}`);
});
