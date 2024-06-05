const mongoose = require("mongoose");
require('dotenv').config()

const DB = process.env.online_DATABASE


mongoose.connect(
  DB
);

