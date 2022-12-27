const express = require('express');
const chalk = require("chalk")
const debug = require("debug")('app')
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Hello Teerawut");
})

app.listen(port, ()=>{
    debug("Listening at port"+ chalk.red(" : "+ port))
})
