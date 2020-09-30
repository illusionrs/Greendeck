const express = require('express')
require('dotenv')

const app = express()
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(process.env.PORT,()=> console.log("working"))