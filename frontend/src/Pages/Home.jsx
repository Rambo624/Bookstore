import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Table from '../Components/table'
import { useDispatch } from 'react-redux'
import { HomePage } from '../utils/bookSlice'
function Home() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(HomePage())
  },[])
  return (
    <div>
        <Header/>
        <Table/>
    </div>
  )
}

export default Home