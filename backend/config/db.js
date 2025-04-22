const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongo");
  } catch (err) {
    console.log("Unable to connect mongo server", err);
  }
};

module.exports = connect;
