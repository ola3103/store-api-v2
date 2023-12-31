const mongoose = require("mongoose");

const connectDB = async (uri) => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = connectDB;
