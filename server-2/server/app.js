if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const errorHandler = require("./middlewares/errorHandler");
const router = require("./routers/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`My app listening on http://localhost:${port}`);
// });

module.exports = app;
