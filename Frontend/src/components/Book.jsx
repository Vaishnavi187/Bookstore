import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import axios from 'axios'
import Card from './Card';
const Book = () => {
  const [book,setbook]=useState([])
  useEffect(()=>{
 const getbook=async()=>{
  try {
 const res=   await axios.get ("http://localhost:4000/book/") 

 setbook(res.data.book.filter((data)=>data.category==="Free"))
 console.log(res.data);
  } catch (error) {
     console.log(error);
      
  }
 };
 getbook()
  },[])
  
   

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '  >
       <div>
       <h2 className='font-bold text-xl pb-2'>Free Offered Courses</h2>
       <p className='text-lg italic'><span>"Discover a variety of free courses designed to inspire learning and creativity.</span>From storytelling to non-fiction,start your journey today at no cost!"</p>
       </div>
    
    <div>
    <Slider {...settings}>
     {book.map((item)=>(
      <Card item={item} key={item.id}/>
     ))}
      </Slider>
    </div>
    </div>
      
    </>
  )
}

export default Book
