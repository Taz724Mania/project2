//Deps
    const express = require("express")
    const List = require("../models/List")

//Router
    const router = express.Router()

//Routes
    //seed
        router.get("/seed", async (req, res) => {

            try{

                const listStart = [

                    {item: "whole milk", brand: "Turner's", location: "Giant Eagle, Brentwood", cost: "$4.53" , quantity: 1, purchased: false},
                    {item: "large brown eggs", brand: "Kirkland Signature", location: "Costco, Waterfront", cost: "$7.89", quantity: 1, purchased: false},
                    {item: "rye bread", brand: "Schwebel's", location: "Walmart, Century Three", cost: "$5.28", quantity: 1, purchased: false},
                    {item: "honeycrisp apples", brand: "Trader Joe's", location: "Trader Joe's, East Liberty", cost: "$1.29 per apple", quantity: 4, purchased: false}
                ]

                //Delete Previous List Loadout
                    await List.deleteMany({})

                //Seed the Starter List
                    const info = await List.create(listStart)

                res.json(info)

            } catch (error) {
                console.log("---", error.message, "---")
                res.send("An error occurred. Please view logs for details.")
            }
        })
        
    //index    
        router.get("/list", async (req, res) => {
            try {
                const list = await List.find({})

                res.render("list/index.ejs", {list})

                console.log(list)

            } catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })








//Export Router
    module.exports = router