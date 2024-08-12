const mongoose=require("mongoose")


const bookSchema=new mongoose.Schema({
  
    title:{
        type:String,
     required:true,
     unique:true
    },
    author:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true
    },
    
},{
    timestamps:true
})


const book=mongoose.model("Book",bookSchema)

module.exports=book