const mongoose = require("mongoose");
const { DB_URI } = process.env; // Replace with your actual database URI
//
// connect
const db = mongoose.connect(DB_URI);

mongoose.once(`error`, (err) => {
  console.log(err);
});
module.exports = db;
