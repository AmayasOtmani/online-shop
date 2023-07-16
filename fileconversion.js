const fs = require('fs')

const { execPath } = require('process')


exports.loadHTML = (path,res)=>
{
    fs.readFile(path,(err,data)=>
    {
        
        res.writeHead(200,{"Content-Type":"text/html"})
       if(err)
       {
            res.write("<h1>Error : File not found</h1>")
            res.end()
       }else
       {            
            res.write(data)
                res.end()
       }
    })
}

exports.loadCSS = (path,res)=>
{
    fs.readFile(path,(err,data)=>
    {
        res.writeHead(200,{"Content-Type":"text/css"})
        if(!err)
        {
            res.end(data)
        }
        else
        {
            res.end()
        }
    })
}