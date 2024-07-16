const mongoose = require("mongoose");
const { DB_URI } = process.env;
const db = mongoose.connect(DB_URI);
module.exports = db;
