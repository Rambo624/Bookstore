import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { notHomePage } from '../utils/bookSlice'
function About() {
const dispatch=useDispatch()
const [details,setDetails]=useState(null)

const {id}= useParams()



useEffect(()=>{
  dispatch(notHomePage())
  },[])
  

async function fetchDetails(){
  try{
    const data= await fetch(`https://bookstore-v634.onrender.com/${id}`)
    const json=await data.json()
    
    setDetails(json)
  }
  catch(error){
    console.log(error)
  }
  
}


useEffect(()=>{
  fetchDetails()
},[id])

if(!details) return <h1>Loading...</h1>
const {title,author,year,createdAt,updatedAt}=details
  return (
    <div>
      <Header />
       <div className='md:m-20 m-4'>
      <h1 className='font-bold text-lg md:text-2xl mb-5 md:mb-10'>BOOK DETAILS</h1>
       <div className='border border-blue-300 inline-block p-4  rounded-lg'>
    <h1 className='font-bold text-sm md:text-lg p-2 md:p-5'>Book id:<span className='font-normal ml-4'>{id}</span></h1>
   <h1 className='font-bold text-sm md:text-lg p-2 md:p-5'>Title:<span className='font-normal  ml-4'>{title}</span></h1>
   <h1 className='font-bold text-sm md:text-lg p-2 md:p-5'>Author:<span className='font-normal  ml-4'>{author}</span></h1>
   <h1 className='font-bold text-sm md:text-lg p-2 md:p-5'>Year of Publishing: <span className='font-normal  ml-4'>{year}</span></h1>
   <h1 className='font-bold text-sm md:text-lg  p-2 md:p-5'>Created at: <span className='font-normal  ml-4'>{createdAt}</span></h1>
   <h1 className='font-bold text-sm md:text-lg p-2 md:p-5'>Updated at: <span className='font-normal  ml-4'>{updatedAt}</span></h1>
    </div>
    </div>
    </div>
   
   
  )
}

export default About