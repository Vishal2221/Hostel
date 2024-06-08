const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema({
  image: String,
  fileId: mongoose.Schema.Types.ObjectId,
});

mongoose.model("ImageDetails", ImageDetailsScehma);
