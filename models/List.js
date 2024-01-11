//Deps and Connection
const mongoose = require("./connection")

//Create Model
    //Schema
        const {Schema, model} = mongoose

        const listSchema = new Schema ({
            item: String,
            brand: String,
            location: String,
            cost: String,
            quantity: Number,
            purchased: Boolean
        })
            const List = model("List", listSchema)

//Export Model
module.exports = List