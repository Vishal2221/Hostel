const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: String,
  roomNumber: Number,
  Block:String,
  phoneNumber: Number,
  rollNumber: Number,
  semester: Number,
  Userpassword:String,
  Text:String,
});



module.exports = mongoose.model("users", userSchema);
