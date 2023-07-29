const express = require('express')
const prodRouter = require('./rooters/prodRouter.js')
const app = express()

app.use(express.static('./'))
app.set("view engine","ejs")
app.use("/products",prodRouter)

app.get("/",(req,res)=>
{
   res.send("Hi")
})
app.get("/*",(req,res)=>
{
   res.send("404 Error : page not found")
})
app.listen(4000)