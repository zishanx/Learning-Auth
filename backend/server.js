const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const protect = require('./middleware/authmiddleware')


dotenv.config()

const app = express()
app.use(express.json())

const authRouter = require('./routes/auth')
const clientsRouter = require('./routes/clients')
app.use('/api/auth',authRouter);
app.use('/api/clients',clientsRouter)

const port = process.env.PORT


mongoose.connect(process.env.MONGO_URI).then((res)=>{console.log('MongoDB connected.')}).catch((err)=>{console.log(err)})

app.get('/api/test', protect, (req,res)=>{
    res.json({message:"You are authorized!", user: req.user})
})

app.get('/',(req,res)=>{
    res.send("Welcome to the server.")
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port} `)
})