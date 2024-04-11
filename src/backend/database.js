const express = require("express");
const cors = require("cors");
require("./config");
const User = require("./users");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
 
  resp.send(result);
});

app.post("/login", async (req, resp) => {
    if(req.body.password && req.body.username) {
        
        let user = await User.findOne(req.body).select("-password");
  if(user){
    resp.send(user);
  }
  else{
    resp.send("no user found")
  }
    }
    else{
        resp.send("no user found")
      }
  
 
});

app.listen(5800);
