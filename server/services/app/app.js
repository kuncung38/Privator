if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const router = require("./routers/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
