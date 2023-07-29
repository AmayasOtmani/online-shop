const express = require('express')

const router = express.Router()

for(let i=1;i<5;i++)
{
    router.get(`/${i}`,(req,res)=>
    {
        try
        {
            res.sendFile(`./products/product${i}.html`)
        }catch
        {
            res.send("<h1>Product not found<h1>")
        }
        
    })
}

module.exports = router