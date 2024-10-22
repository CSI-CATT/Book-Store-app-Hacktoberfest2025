import React from 'react'
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Course from '../components/course';

function home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Course />
      <Footer />

    </>
  )
}

export default home