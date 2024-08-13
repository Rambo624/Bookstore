const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const jwt=require('jsonwebtoken')
dotenv.config()
const bookRouter=require("./Routes/BookRouter")


app.use(cors({
  origin: '*', // Allow any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json())

app.use("/",bookRouter)


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000/ `)
})