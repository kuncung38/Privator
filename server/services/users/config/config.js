const mongoose = require("mongoose");
const colors = require("colors");

async function connectDB() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected on: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error.name.red.bold);
    console.log(error.message);
    process.exit();
  }
}

module.exports = connectDB;
