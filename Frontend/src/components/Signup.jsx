

import React, { useState } from 'react'
import { IoIosPerson } from "react-icons/io";
import { MdOutlineMarkEmailUnread, MdWifiPassword } from "react-icons/md";
import { FaEye,FaEyeSlash  } from "react-icons/fa";

import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';


const Signup = () => {
const [password,setpassword]=useState(false)
  const [formData,setformdata]=useState({
    username:"",
    email:"",
    phone:"",
    password:""

  })
 
    const handlechange=(e)=>{
    const {name,value}=e.target;
    setformdata({...formData,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try {
    const res= await axios.post('http://localhost:4000/user/signup',formData)
    if(res.data){
      toast.success('User Resgistered successfully');
    }
    localStorage.setItem("Users",JSON.stringify(res.data))
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.msg);
      }
      
    }
    
    setformdata({
        username:"",
        email:"",
        phone:"",
        password:""
    })
   
}
  return (
    <div className='w-full sm:w-3/4 md:w-2/4 lg:w-1/3 mx-auto mt-20 p-6 border-2 bg-gray-800 rounded-lg '>
        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3  ">✕</Link> 
          <div className=' text-center font-bold text-white'> <h1 className='text-3xl mt-2  '>Register User</h1></div> 
      <form onSubmit={handleSubmit} className='flex flex-col gap-5  mt-6'>
      <label className="input input-bordered flex items-center gap-2">
        <IoIosPerson/>
  <input type="name" className="grow" placeholder="Username" name='username'required  onChange={handlechange} value={formData.username}/>

</label>
<label className="input input-bordered flex items-center gap-2">
 
  < MdOutlineMarkEmailUnread />
  <input type="email" className="grow" placeholder=" Email" name='email'  onChange={handlechange} value={formData.email} required/>
</label>

<label className="input input-bordered flex items-center gap-2">

  < MdWifiPassword/>
  <input type={password?'text':'password'} className="grow" placeholder='password'name='password' onChange={handlechange} value={formData.password} required/>
   {password?  <FaEye onClick={()=>setpassword(false)}/>:<FaEyeSlash onClick={()=>setpassword(true)}/>}
</label>

<div className='flex justify-around mt-4'>
    <button className='bg-pink-600 text-white rounded-md px-3 py-1  hover:bg-pink-800 duration-200'>Signup </button> <p className='text-lg'>Have Account? <Link to='/login' className='underline text-blue-500 cursor-pointer'> Login</Link>
    </p>
   </div>
      </form>
    </div>
  )
}

export default Signup