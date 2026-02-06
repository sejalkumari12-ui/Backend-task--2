const express = require("express")

const app = express()

app.use(express.json())

const notes= []

/*POST /notes */
app.post("/notes",(req,res)=>{
   notes.push(req.body)

   res.status(201).json({
    message:"notes created"
   })

})


/* GET / notes */
app.get("/notes",(req,res)=>{
 res.status(200).json({
  notes:notes
 })
})




module.exports = app