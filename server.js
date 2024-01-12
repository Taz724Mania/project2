//Deps
    require("dotenv").config()
    const express = require("express")
    const registerGlobalMiddleware = require("./utils/middleware")

//App Object
    const app = express()

//Register Middleware
    registerGlobalMiddleware(app)

//Routes
    app.get("/", (req, res) => {
        res.send("They were, all of them, deceived. For another ring was made")
    })

//Server Listener
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`The one ring to rule them all in ${PORT}`)
    })