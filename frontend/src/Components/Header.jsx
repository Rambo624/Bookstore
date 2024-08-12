import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {

  const home=useSelector((store)=>store.book.isHomePage)

  return (
    <div className='flex justify-between p-2 bg-gray-200'>
       <Link to='/'> <h1 className='m-3 text-3xl'>BookStore</h1></Link>
      {home && <Link to='/create'><button className='bg-green-400 p-2 rounded-lg mt-3 mr-7 px-4'>ADD</button></Link>} 
    </div>
  )
}

export default Header