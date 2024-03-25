const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/tw-db";

async function dbconnect() {
  await mongoose.connect(url);
  mongoose.connection.on("connected", () => console.log("connected"));
}
module.exports = dbconnect;
