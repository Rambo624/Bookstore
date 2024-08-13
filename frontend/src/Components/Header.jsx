import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa';

function Header() {

  const home=useSelector((store)=>store.book.isHomePage)

  return (
    <div className='flex justify-between p-2 bg-gray-200'>
       <Link to='/'> <h1 className='mt-2 md:m-3 text-3xl'>BookStore</h1></Link>
      {home && <Link to='/create'><button className='bg-green-400 p-2 rounded-lg mt-3 md:mr-7 px-4'><FaPlus/></button></Link>} 
    </div>
  )
}

export default Header