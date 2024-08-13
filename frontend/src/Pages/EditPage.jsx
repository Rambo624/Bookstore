import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { notHomePage } from '../utils/bookSlice'
function EditPage() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
const location=useLocation()
const {title,author,year}=location.state ||{}
const {id}=useParams()
const [formData,setFormData]=useState({
    title:title||"",author:author||"",year:year||""
})

   async function handleSubmit(e){
        e.preventDefault()
        try{
           await axios.put(`https://bookstore-v634.onrender.com/${id}`,formData)
            navigate("/")
        }
        catch(error){
            console.log(error)
        }
      

    }

function handleChange(e){
const {name,value}=e.target
setFormData(prev=>({...prev,[name]:value}))
}


useEffect(()=>{
    dispatch(notHomePage())
    },[])
    
  
    return (
        <div >
            <Header/>
            <div className=' ml-20 mt-6  md:ml-[30%] md:mt-[10%]'>
            <h1 className='font-bold text-xl mb-5'>Edit Book</h1>
            <div className='inline-block p-8 border border-blue-300  ' >
                <form onSubmit={handleSubmit} >
                <div className='my-3'>
                <label className='font-bold' >Title</label><br />
                <input name='title' onChange={handleChange} value={formData.title}  className='p-1 md:w-[600px] border border-black rounded-md' type="text" placeholder='Enter Title' />
                </div>
              <div className='my-3'>
              <label className='font-bold' htmlFor="">Author</label><br />
              <input name='author' onChange={handleChange} value={formData.author}   className='p-1 md:w-[600px] border border-black rounded-md' type="text" placeholder='Author Name' />
              </div>
               <div className='my-3'>
               <label className='font-bold' htmlFor="">Year</label><br />
               <input name='year'  onChange={handleChange} value={formData.year}  className='p-1 md:w-[600px] border border-black rounded-md' type="number" placeholder='Enter Year of Publishing' /><br />
               <button className='bg-blue-500 p-1 text-white mt-4 border border-black rounded-lg'>Submit</button>
               </div>
              
                </form>
              
            </div>
            
            </div>
            
         
            
        </div>
      )
}

export default EditPage