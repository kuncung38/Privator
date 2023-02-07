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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`My app listening on http://localhost:${port}`);
});

module.exports = router;
