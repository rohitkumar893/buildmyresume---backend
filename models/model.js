const mongoose = require("mongoose")


const userSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    summary:{
        type: String,
        required:true
    },
    education:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    skills:{
        type:String,
        required: true
    },
    experience:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User