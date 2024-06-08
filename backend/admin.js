const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Designation: String,
  PhoneNumber: Number,
  Userpassword: String,
});

module.exports = mongoose.model("admin", adminSchema);
