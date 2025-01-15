import React from 'react'
import { MdOutlineMail } from "react-icons/md";


const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  my-10'>
        <div className=' w-full md:w-1/2  mt:12 md:mt-32 order-2 md:order-1'>
       <div className='space-y-12'>
       <h1 className='text-4xl font-bold'>Hello,welcome here to learn something <span className='text-pink-500'> new everyday!!!</span></h1>
       <p className='text-xl font-semibold'><span className='italic font-bold text-gray-400'>"Welcome to our learning platform ,where knowledege meets curiosity!!</span> Explore a wide range of courses designed to help you achieve your goals and gow everyday"</p>

       <label className="input input-bordered flex items-center gap-2">
       <MdOutlineMail />
  <input type="text" className="grow" placeholder="Email" />
</label>

       </div>
       <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className='order-1 w-full md:w-1/2' > 
        <img src="book.jpg" alt=""  className='w-96 mt:5 md:mt-32 md:ml-16'/>
        </div>
    </div>
      
    </>
  )
}

export default Banner
