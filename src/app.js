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

/* DETELE /notes/:index */
app.delete("/notes/:index" ,(req,res) =>{
   delete notes [req.params.index]

   res.status(204).json({
      massage:"notes deleted"
   })

   
})




module.exports = app