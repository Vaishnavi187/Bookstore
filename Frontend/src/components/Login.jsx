
import axios from 'axios';
import React, {  useState,} from 'react'
import toast from 'react-hot-toast';
import { MdOutlineMarkEmailUnread, MdWifiPassword } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash  } from "react-icons/fa";


const Login = () => {
  
  const navigate=useNavigate()
const [password,setpassword]=useState(false)
  const [formData,setformdata]=useState({
  
    email:"",
    password:""

  })

    const handlechange=(e)=>{
    const {name,value}=e.target;
    setformdata({...formData,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
     console.log(formData);
    try {
      const res=await axios.post('http://localhost:4000/user/login',formData)
      if(res.data){
        toast.success('User Logged-in successfully');
       setTimeout(() => {
        window.location.reload();
       }, 3000);
       localStorage.setItem("Users",JSON.stringify(res.data))
       
      }
    
    
      navigate("/")
      setformdata({  
        email:"",
        password:""
      })
    } catch (error) {
      console.log(error);
      if(error.response){
        toast.error(error.response.data.msg);
      }     
    }
    }


  return (
    
<div className='w-full sm:w-3/4 md:w-2/4 lg:w-1/3 mx-auto mt-20 p-6 border-2 bg-gray-800 rounded-lg'>
<Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 ">✕</Link> 

          <div className=' text-center font-bold text-white'> <h1 className='text-3xl mt-2  '>Login</h1></div>
          
      <form onSubmit={handleSubmit} className='flex flex-col gap-6  mt-6'>
    
  
<label className="input input-bordered flex items-center gap-2">

 
  < MdOutlineMarkEmailUnread />
  <input type="email" className="grow" placeholder=" Email" name='email' onChange={handlechange} value={formData.email}/>
</label>
<label className="input input-bordered flex items-center gap-2">
  

  < MdWifiPassword/>
  <input type={password?'text':'password'} className="grow" placeholder='password' name='password' onChange={handlechange} value={formData.password} />
  {password?  <FaEye onClick={()=>setpassword(false)}/>:<FaEyeSlash onClick={()=>setpassword(true)}/>}
</label>
    <div className='flex justify-around mt-4'>
    <button type='submit' className='bg-pink-600 text-white rounded-md px-3 py-1  hover:bg-pink-800 duration-200'>Login </button> <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'> Signup</Link></p>
  </div>
      </form>
    
    </div>
    

  )
}

export default Login





