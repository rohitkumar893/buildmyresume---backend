const express = require("express")
const mongoose = require("mongoose")

const app = express()

const PORT = 4050;

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://rkrohitkumar893:999mongodb@cluster0.2skwndo.mongodb.net/");
        console.log("mongodb connected");
    }
    catch (err) {
        console.log(err, "DB connection failed");
    }
}
connectDB()

app.listen(PORT, () => {
    console.log("Server started")
})