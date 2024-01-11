//Deps
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const mongoose = require("./models/connection")
const List = require("./models/List")

//app object
const app = express()

//middleware
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

//routes
app.get("/", (req, res) => {
    res.send("They were, all of them, deceived. For another ring was made")
})

//routers
    //seed
        app.get("/seed", async (req, res) => {

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
        app.get("/list", async (req, res) => {
            try {
                const list = await List.find({})

                res.render("list/index.ejs", {list})

                console.log(list)

            } catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })

    //new
        app.get("/list/new", (req, res) => {

            res.render("list/new.ejs")

        })    

    //create
        app.post("/list", async (req, res) => {
            try {

                req.body.purchased = req.body.purchased === "on" ? true : false

                await List.create(req.body)

                res.redirect("/list")

            }catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })





    //show
        app.get("/list/:id", async (req, res) => {
           try {

            const id = req.params.id
            const list = await List.findById(id)
            
            res.render("list/show.ejs", { list } )

           } catch(error) {
            console.log("---", error.message, "---")
            res.status(400).send("An error occurred. Please view logs for details.")
        }
        })    


//server listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`The one ring to rule them all in ${PORT}`)
})