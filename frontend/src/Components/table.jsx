import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { HomePage } from '../utils/bookSlice'


function Table() {
    
    const [book, setBook] = useState(null)


    async function bookData() {
        const data = await fetch("http://localhost:3000/")
        const json = await data.json()
        
        setBook(json)
    }

    function handleDelete(id) {
        console.log(id)
        axios.delete(`http://localhost:3000/${id}`)
        setBook(book.filter((b) => b._id != id))

    }

    useEffect(() => {
        bookData()

    }, [])

    if (!book) return <h1>Loading...</h1>

    return (
        <div className=''>
            <table className=' border-spacing-2  border-separate mx-auto mt-10 '>
                <thead  >
                    <tr>
                        <th className='border border-black rounded-lg p-2 bg-blue-600 text-white'>SI NO</th>
                        <th className='border border-black rounded-lg px-20  bg-blue-600 text-white'>Title</th>
                        <th className='border border-black rounded-lg px-20  bg-blue-600 text-white'>Author</th>
                        <th className='border border-black rounded-lg px-20  bg-blue-600 text-white'>Year</th>
                        <th className='border border-black rounded-lg px-32  bg-blue-600 text-white'>Operations</th>
                    </tr>

                </thead>
                <tbody>
                    {book.map((b, index) => {
                        const { id, title, author, year } = b
                        return (
                            <tr key={index}>


                                <td className='border border-black text-center rounded-lg bg-gray-100'>{index + 1}</td>
                                <td className='border border-black text-center rounded-lg  bg-gray-100'>{title}</td>
                                <td className='border border-black text-center rounded-lg  bg-gray-100'>{author}</td>
                                <td className='border border-black text-center rounded-lg  bg-gray-100'>{year}</td>
                                <td className='border border-black text-center rounded-lg  bg-gray-100'>
                                    <div className='flex justify-around'>
                                        <div >
                                            <Link to={`/details/${b._id}`}><button>view</button></Link>
                                        </div>
                                        <div >
                                            <Link to={`/edit/${b._id}`} state={{title:title,author:author,year:year}}><button>edit</button></Link>
                                        </div>
                                        <div >
                                            <button onClick={() => handleDelete(b._id)}>delete</button>
                                        </div>
                                    </div></td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table