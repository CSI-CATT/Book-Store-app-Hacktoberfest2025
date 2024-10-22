import React from 'react'
import Home from "./Home/home";
import Signup from './components/signup';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router-dom";
import Course from './Course/Course';
import Contact from './contact/contactmain'
import About from './About/aboutmain';
import { useAuth } from './context/Authprovider';

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white bg-white text-black'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={authUser ? <Course /> : <Navigate to='/signup' />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Toaster />
      </div>

    </>
  )
}

export default App