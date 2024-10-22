import React, { useState, useEffect } from 'react'
import Cards from './cards'
import axios from 'axios'

import { Link } from 'react-router-dom';

function Main() {
  axios.defaults.withCredentials=true;
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-app-lemon.vercel.app/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, []);


  return (
    <>
      <div className='max-w-screen-2xl px-0 md:px-20 text-center justify-center  dark:bg-slate-900'>
        <h1 className='text-2xl pt-28  font-sans font-extrabold'>Hello Coders! we're delighted to have you here!! :)</h1>
        <p className=' pt-8 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae veniam reprehenderit quis aspernatur ad maiores necessitatibus adipisci illum porro! Assumenda tenetur, eum voluptate aliquam fuga quae pariatur. Accusamus, porro explicabo.</p>
        <Link to={"/"}><button className="bg-lime-600 text-white px-6 py-2 rounded-xl hover:bg-sky-400 duration-300 mt-8 font-semibold">Back</button></Link>
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 px-8 md:px-20  hover:scale-95duration-100'>
        {
          book.map((item) =>
            <Cards key={item.id} item={item} />)

        }
      </div>



    </>
  )
}

export default Main
