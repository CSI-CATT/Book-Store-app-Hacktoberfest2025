import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Course() {

  return (
    <>
      <div className='bg-white dark:bg-slate-900 text-black dark:text-white'>
        <Navbar />
        <div><Main /></div>
        <Footer />
      </div>

    </>
  )
}

export default Course