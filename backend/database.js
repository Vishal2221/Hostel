const express = require("express");
const cors = require("cors");
require("./config");
const User = require("./users");
const app = express();

app.use(express.json());
app.use(cors());




// Create a new user instance with the request body data
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
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



app.listen(5800);
