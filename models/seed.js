//Deps
const mongoose = require("./connection")
const List = require("./List")

//Seed Code
mongoose.connection.on("open", async () => {

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
        //Log the Created List
            console.log("---Seeded List---")
            console.log(info)
            console.log("---Seeded List---")
        
        //Close Connection
        mongoose.connection.close()
    } catch (error) {
        console.log("---", error.message, "---")
    }
})