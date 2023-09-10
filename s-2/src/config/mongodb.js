const mongoose = require("mongoose");

function connectMongodb(url) {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url)
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully');
    });
    // console.log("Mongodb Connected");
  } catch (e) {
    console.error(`Error connecting mongodb: ${e.message}`);
  }
}

module.exports = connectMongodb;
