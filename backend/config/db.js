const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongo");
  } catch (err) {
    console.log("Unable to connect mongo server", err);
  }
};

module.exports = connect;
