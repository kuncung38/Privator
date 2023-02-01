if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/config");
const errorHandler = require("./middlewares/errorHandlers");

const router = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4001;

connectDB();

app.get("/", (req, res, next) => {
    res.send("Here is Users services");
});

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Services \User is listening on port  ${port}`);
});
