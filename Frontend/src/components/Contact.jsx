



import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoIosPerson } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";

import { Link } from 'react-router-dom';





const Contact = () => {

 

  const [formData,setformdata]=useState({
    username:"",
    email:"",
    message:""

  })
 
  
    const handlechange=(e)=>{
    const {name,value}=e.target;
    
    
    setformdata({...formData,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    try {
      const res=await axios.post('http://localhost:4000/cont/get',formData)
      if(res.data){
        toast.success('Message sent  successfully');
    
       
      }
  
      setformdata({ 
        username:"", 
        email:"",
        password:""
      })
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.msg);
      }
      
      
      
    }
    
    setformdata({
        username:"",
    email:"",
    message:""
    })
   
}
  return (


    <div className='w-full sm:w-3/4 md:w-2/4 lg:w-1/3 mx-auto mt-20 p-6 border-2 bg-gray-800 rounded-lg'>
       
          <div className=' text-center font-bold text-white'> <h1 className='text-3xl mt-2  '>Contact Us</h1></div> 
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-3'>
      <label className="input input-bordered flex items-center gap-2">
        <IoIosPerson/>
  <input type="name" className="grow" placeholder="Username" name='username'required  onChange={handlechange} value={formData.username}/>

</label>
<label className="input input-bordered flex items-center gap-2">
 
  < MdOutlineMarkEmailUnread />
  <input type="email" className="grow" placeholder=" Email" name='email'  onChange={handlechange} value={formData.email} required/>
</label>
<label className="input input-bordered flex items-center gap-2">
  
<LuMessageCircleMore />
  <input type="text" className="grow" placeholder="Message" name='message' onChange={handlechange} value={formData.message} required/>
</label>


<div className='flex justify-around mt-4'>
    <button to='/' type='submit' className='bg-blue-700 text-white rounded-md px-3 py-1  hover:bg-blue-900 duration-200'>Submit </button> 
   </div>
      </form>
    </div>
   
  )
}

export default Contact