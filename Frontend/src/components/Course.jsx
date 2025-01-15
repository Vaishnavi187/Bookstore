import React, { useEffect, useState } from 'react'

import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {
    const [book,setbook]=useState([])
    useEffect(()=>{
   const getbook=async()=>{
    try {
   const res=   await axios.get ("http://localhost:4000/book/") 
   console.log(res.data);
   setbook(res.data.book)
    } catch (error) {
       console.log(error);
        
    }
   };
   getbook()
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-600'>Here!</span></h1>
            <p  className='mt-12'>"Every page opens up a world of adventure, knowledge, and discovery! Whether you're a passionate reader, a casual book lover, or looking for that perfect gift, we offer a wide variety of books across all genres. Dive into the latest bestsellers, explore timeless classics, or find hidden gems to add to your collection. Our mission is to inspire readers of all ages and tastes with a carefully curated selection of books. Happy reading!"

</p>
            <Link to='/'>
            <button className='text-white bg-pink-700 px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6 z'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>

    </div>
    
    </>
  )
}

export default Course
