const express = require('express')

const app = express()

app.use(express.json())

const notes =[]

app.get("/",(req,res)=>{
 res.send("hello world")
})


//isse server me send hoga data

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
})

//isse client me send hoga data

app.get("/notes",(req,res)=>{
   res.send(notes)
})


module.exports = app 