const express = require('express')
const prodRouter = require('./prodRouter.js')
const app = express()

app.use(express.static('./'))
app.use("/products",prodRouter)

app.get("/",(req,res)=>
{
   console.log("this is working!")
})
app.listen(4000)