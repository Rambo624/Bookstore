const book=require("../Model/BookSchema")


const createBook=async(req,res)=>{
    if(!(req.body.title||req.body.author||req.body.year))
        console.log("fill all the required fields")
    else{
        try {
            const newbook= await book.create({
              
                title:req.body.title,
                author:req.body.author,
                year:req.body.year
               })
        
               return res.status(200).send(newbook)
        } catch (error) {
            res.send("Book already in database")
            console.log("Book already in database",error)
        }
      
    }

}

const getBooks=async(req,res)=>{
    
    const books=await book.find()
    return res.status(200).send(books)
}


const getBook=async(req,res)=>{
    const books=await book.findById(req.params.id)
    if (!books) {
        return res.status(404).json({ message: 'Book not found' });
      }
    return res.status(200).send(books)
  
}

const updateBook=async(req,res)=>{
    const {title,author,year}=req.body
    const id=(req.params.id)
try{
const updateBook= await book.findByIdAndUpdate({_id:id},{title,author,year},{new:true})
if(!updateBook) return res.status(404).send("Book not found")
    res.status(200).send(updateBook)
} 
catch(error){
console.log(error.message)
}
}


const deleteBook=async(req,res)=>{
    const {title,author,year}=req.body
    const id=(req.params.id)
try{
const deleteBook= await book.findByIdAndDelete(id)
if(!updateBook) return res.status(404).send("Book not found")
    res.status(200).send(deleteBook)
} 
catch(error){
console.log(error.message)
}
}

module.exports={
    createBook,getBooks,getBook,updateBook,deleteBook
}