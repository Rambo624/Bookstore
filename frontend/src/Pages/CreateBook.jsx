import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { notHomePage } from '../utils/bookSlice'

function CreateBook() {
  const dispatch=useDispatch()
const navigate=useNavigate()
const title=useRef()
const author=useRef()
const year=useRef()


useEffect(()=>{
dispatch(notHomePage())
},[])


async function handleSubmit(e){
  e.preventDefault()

  const BookData={
    title:title.current.value,
    author:author.current.value,
    year:year.current.value
  }
  try{
    axios.post(`https://bookstore-v634.onrender.com/`,BookData),
    console.log("posted successfully")
    navigate("/")
  }
  catch(error){
console.log("Cannot Post the Book data",error)
  }
  
}


  return (
    <div >
        <Header/>
        <div className='inline-block p-8 border border-blue-300 ml-7 mt-20 md:ml-[30%] md:mt-[10%] ' >
            <form onSubmit={handleSubmit} >
            <div className='my-3'>
            <label className='font-bold' >Title</label><br />
            <input ref={title}  className='p-1 md:w-[600px] border border-black rounded-md' type="text" placeholder='Enter Title' />
            </div>
          <div className='my-3'>
          <label className='font-bold' htmlFor="">Author</label><br />
          <input ref={author}  className='p-1 md:w-[600px] border border-black rounded-md' type="text" placeholder='Author Name' />
          </div>
           <div className='my-3'>
           <label className='font-bold' htmlFor="">Year</label><br />
           <input ref={year} className='p-1 md:w-[600px] border border-black rounded-md' type="number" placeholder='Enter Year of Publishing' /><br />
           <button className='bg-blue-500 p-1 text-white mt-4 border border-black rounded-lg'>Submit</button>
           </div>
          
            </form>
          
        </div>
        
     
        
    </div>
  )
}

export default CreateBook