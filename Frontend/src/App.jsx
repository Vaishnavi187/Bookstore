import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext'


const App = () => {
  const [authUser,setAuthUser]=useAuth();
  return (
    <>
    
 <Navbar/>
 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:< Navigate to='/signup'/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
<Footer/>
<Toaster />
      
    </>
  )
}

export default App
