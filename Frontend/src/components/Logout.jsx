import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const handlelogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("User logged-out successfully")
            setTimeout(() => {
                
            window.location.reload();
            }, 2000);
        } catch (error) {
            toast.error("Error")
        }
    }
  return (
    <div>
      <button onClick={handlelogout} className='px-3 py-2 bg-pink-900 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout
