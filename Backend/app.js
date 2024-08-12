const express = require('express')
const app = express()
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const jwt=require('jsonwebtoken')
dotenv.config()
const bookRouter=require("./Routes/BookRouter")


app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST','PUT','DELETE','PATCH'], // Allow only specific HTTP methods
  allowedHeaders: ['Content-Type'], // Allow only specific headers
  
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
    console.log(`server running on https://bookstore-lboe.onrender.com/ `)
})