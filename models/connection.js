//Deps
require("dotenv").config()
const mongoose = require("mongoose")

//URL
const DATABASE_URL = process.env.DATABASE_URL
//Connect
mongoose.connect(DATABASE_URL)

//Connection Events
mongoose.connection
.on("open", () => {console.log("Connected to Mongoose")})
.on("clos", () => {console.log("Disconnected from Mongoose")})
.on("error", (error) => {console.log(error)})

//Export the connection
module.exports = mongoose