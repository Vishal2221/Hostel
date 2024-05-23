const express = require("express");
const cors = require("cors");
require("./config");
const User = require("./users");
const app = express();

const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());




// Create a new user instance with the request body data
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  user.Userpassword = req.body.phoneNumber; 
  let result = await user.save();


  resp.send(result);
});

//login
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.username) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send("no user found");
    }
  } else {
    resp.send("no user found");
  }
});



//verify phoneNumber
app.post("/verifyNumber", async (req, resp) => {
  if (req.body.rollNumber && req.body.Userpassword) {
    let user = await User.findOne(req.body).select("-Userpassword");
    if (user) {
      resp.send(user);
    } else {
      resp.send("no user found");
    }
  } else {
    resp.send("no user found");
  }
});




//show student data
app.get("/getData", async (req, resp) => {
  let user = await User.find({ rollNumber: { $exists: true } }).sort({
    roomNumber: 1,
  });
  if (user.length > 0) {
    resp.send(user);
  } else {
    resp.send({ result: " no user" });
  }
});

//delete student
app.delete("/users/:id", async (req, resp) => {
  const result = await User.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// Find a user in the database based on the provided ID
app.get("/users/:id", async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record Found" });
  }
});

//update student
app.put("/users/:id", async (req, resp) => {
  let result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});


//update Userpassword
app.put("/users/:id/change-password", async (req, res) => {
  if (!req.body.newPassword) {
    return res.status(400).send("newPassword is required.");
  }

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Update the password
    user.Userpassword = req.body.newPassword;
    const result = await user.save();

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


////////////////////////////

//importing schema
require("./imageDetails");
const Images = mongoose.model("ImageDetails");

app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});



//////////////////////////////////////////////////////////////

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/frontend/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, "MESSMENU" +uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});




app.get("/get-image", async (req, res) => {
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

const fs = require('fs');

const path = require('path');

app.delete("/deleteImage/:id", async (req, res) => {
  try {
    const image = await Images.findOne({ _id: req.params.id });
    if (image) {
      const filePath = path.join(__dirname, '../frontend/src/frontend/images/', image.image);
      fs.unlinkSync(filePath);
      const result = await Images.deleteOne({ _id: req.params.id });
      res.send(result);
    } else {
      res.status(404).send({ message: 'Image not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error deleting image' });
  }
});


app.listen(5800);
