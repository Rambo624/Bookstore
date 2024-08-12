const express=require('express')
const router=express.Router()
const book=require("../Model/BookSchema")
const BookController=require("../Controllers/BookController")


router.post("/",BookController.createBook)
router.get("/",BookController.getBooks)
router.get("/:id",BookController.getBook)
router.put("/:id",BookController.updateBook)
router.delete("/:id",BookController.deleteBook)








module.exports= router;