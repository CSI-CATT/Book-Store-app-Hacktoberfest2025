import React from 'react'
import Cards from './cards';
import axios from 'axios'
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function course() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("/book");

                const data = res.data.filter((data) => data.category === 'Free');
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, []);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container my-0 mx-0 text-black md:px-20 px-4 bg-white dark:bg-slate-900 dark:text-white '>
                <div className=' mt-0 md:mt-0 font-medium space-y-4 mb-10 md:mb-10'>
                    <h1 className='font-semibold text-center text-xl py-5'>Free offered Books</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas et cum temporibus repellendus, ipsum commodi rem, ducimus odit natus dolor, error ut facere. Tempore, omnis tenetur! Atque dolores officia quas!</p>

                </div>

                <div className="ml-4 px-2 md:px-1">
                    <Slider {...settings}>
                        {book.map((item) => (<Cards item={item} key={item.id} />))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default course