// const fetch = require("node-fetch");
const theFetchWay_Then = require("./fetchWay_Then.js");

let fs = require("fs")

theFetchWay_Then("http://jservice.io/api/categories?count=100")
    .then(data => {
        fs.writeFileSync("categories.json", JSON.stringify(data))
    })