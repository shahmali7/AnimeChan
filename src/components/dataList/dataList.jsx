import React, { useState, useEffect } from 'react'
import Data from '../data/Data'
import './DataList.css'
import { v4 as uuidv4 } from 'uuid';
const DataList = () => {
  const [animeChan, setanimeChan] = useState([])


  const getApi = () => {
    fetch('https://animechan.vercel.app/api/quotes')
      .then(res => res.json())
      .then(quotes =>setanimeChan(quotes.map((item)=>({...item,id: uuidv4()})) ))
  }

  
  useEffect(() => {
    getApi()
  }, [])



  return (
    <div className='DataList'>
    <h1>Anime Data </h1>
    <Data animeChan={animeChan} setanimeChan={setanimeChan} />
    </div>
  )
}

export default DataList