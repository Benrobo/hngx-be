
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const LOCAL_DB_CONN = "mongodb://127.0.0.1:27017/hngx-be";

const ENV = {
  mongoUrl: process.env.NODE_ENV === "development" ? LOCAL_DB_CONN : process.env.MONGODB,
  clientUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com",
};

module.exports = ENV;
