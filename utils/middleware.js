//Deps
    require("dotenv").config()
    const express = require("express")
    const morgan = require("morgan")
    const methodOverride = require("method-override")
    const listController = require("../controllers/list")

function registerGlobalMiddleware(app) {
//Register Middleware
    app.use(morgan("dev"))
    app.use(methodOverride("_method"))
    app.use(express.urlencoded({extended : true}))
    app.use(express.static("public"))

//Routers
    app.use("/list", listController)
}

//Export Middleware
module.exports = registerGlobalMiddleware