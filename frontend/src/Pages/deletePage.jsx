import React from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { notHomePage } from '../utils/bookSlice'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function DeletePage() {
    const location=useLocation()
    const title=location.state.title
    const dispatch=useDispatch()
    const navigate=useNavigate()
const {id}=useParams()
    useEffect(()=>{
        dispatch(notHomePage())
        },[])


    function handleDelete(id) {
        console.log(id)
        axios.delete(`http://localhost:3000/${id}`)
       navigate("/")

    }

        
  return (
    <div>
        <Header/>
        <div className='ml-[30%] mt-[10%]'>
            <h1 className='font-bold text-2xl mb-7'>Delete Book</h1>
            <div className='border p-10 border-blue-200 inline-block'>
                <p>Are you sure you want to delete this book?</p>
                <h1 className='font-semibold ml-10'>"{title}"</h1>
                <button onClick={()=>handleDelete(id)} className='p-1 bg-red-600 px-14 mt-8 ml-12 text-white'>Yes,Delete it</button>
            </div>
        </div>
    </div>
  )
}

export default DeletePage