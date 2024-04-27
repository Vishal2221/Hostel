const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
       
        Name:String,
        roomNumber:String,
        phoneNumber:Number,
        rollNumber:Number,
        semester:Number
        
    }
)

module.exports = mongoose.model('users' ,userSchema)