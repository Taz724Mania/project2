//Deps
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const listController = require("./controllers/list")
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
    //new
        app.get("/list/new", (req, res) => {

            res.render("list/new.ejs")

        })    

    //destroy
        app.delete("/list/:id", async (req, res) => {

            try{ 
            
            const id = req.params.id

            await List.findByIdAndDelete(id)

            res.redirect("/list")

            } catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })

    //update
        app.put("/list/:id", async (req, res) => {

            try{

                const id = req.params.id

                req.body.purchased = req.body.purchased === "on" ? true : false

                await List.findByIdAndUpdate(id, req.body)

                res.redirect(`/list/${id}`)

            } catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })

    //create
        app.post("/list", async (req, res) => {

            try {

                req.body.purchased = req.body.purchased === "on" ? true : false

                await List.create(req.body)

                res.redirect("/list")

            } catch(error) {
                console.log("---", error.message, "---")
                res.status(400).send("An error occurred. Please view logs for details.")
            }
        })

    //edit
        app.get("/list/:id/edit", async (req, res) => {
            try {

                const id = req.params.id
                const list = await List.findById(id)

                res.render("list/edit.ejs", { list })


            } catch(error) {
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