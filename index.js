const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()



// Data base connection
mongoose.connect(process.env.coneection_string)


const db = mongoose.connection

db.on("error", (err) => {
    console.log(err);
})

db.once("connected", () => {
    console.log("db connected");
})



// Middle Wears
app.use(cors())
app.use(express.json())



// Index Route
app.get("/", (req, res) => {
    res.status(200).send("Server Started")
})




// Server Started
const PORT = process.env.port || 3000
app.listen(PORT, () => {
    console.log("Server has been started on port 3000");
})