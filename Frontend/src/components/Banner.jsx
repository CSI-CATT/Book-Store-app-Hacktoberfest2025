import React from 'react';
import Home from '../../public/Home.svg';

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-3 flex flex-col md:flex-row bg-custom-gradient dark:text-black'>
                <div className='order-2 md:order-1 w-full md:w-1/2 text-2xl mt-10 md:mt-36 font-bold space-y-8 mb-10 md:mb-10'>
                    <h1 className="text-justify md:text-left text-black">Hello Coders! Welcome to the world of books where you learn
                        <span className='text-blue-700'> something new every day!!!</span>
                    </h1>
                    <h2 className="font-sans md:text-left text-black">Books give coders valuable insights, improve problem-solving, and keep you updated with the latest in tech.</h2>
                    <label className="input input-bordered flex items-center gap-2 dark:text-white dark:bg-slate-900
                     bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow text-black dark:text-white" placeholder="Email" />
                    </label>
                    <button className="btn btn-active btn-primary  cursor-pointer ml-36 md:ml-0 px-6">Get Started</button>
                </div>
                <div className='order-1 w-full md:w-1/2 flex justify-center items-center'>
                    <img src={Home} className='w-96 h-80 mt-16 md:mt-11 md:ml-20 animate-custom-bounce' />
                </div>
            </div>
        </>
    );
}

export default Banner;
