const express = require('express')
const mongoose = require('mongoose')
const dotenv = requrie('dotenv')

dotenv.config()

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to the server.")
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})