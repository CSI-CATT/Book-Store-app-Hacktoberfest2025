import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    axios.defaults.withCredentials=true;
    const onSubmit = async (data) => {
        const userinfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("https://book-store-app-lemon.vercel.app/user/signup", userinfo);
            console.log(res.data);
            if (res.data) {
                toast.success('Signup Succesfully:)');
                navigate(from, { replace: true });
                window.location.reload();
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        } catch (error) {
            console.log("Error Response:", error.response); // Log the full error response
            toast.error("Error: " + (error.response ? error.response.data.message : "Something went wrong"));
        }
    };

    return (
        <div>
            <div id="my_modal_3" className="flex h-screen justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='modal-box px-20 bg-white text-black dark:bg-slate-900 dark:text-white dark:border-white border-black '>
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost border-black dark:border-white absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").style.display = 'none'} // Correctly close the modal
                        >
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg flex justify-center border-2 border-black dark:border-white">Signup</h3>
                        <br />
                        <div className='space-y-2'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your Name'
                                className='bg-white text-black dark:text-white dark:bg-slate-900 w-80 px-3 border rounded-md outline-none'
                                {...register("fullname", { required: true })}
                            /><br />
                            {errors.fullname && <span className='text-sm text-red-800'>This field is required!</span>}
                        </div>
                        <div className='mt-7 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='bg-white text-black dark:text-white dark:bg-slate-900 w-80 px-3 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            /><br />
                            {errors.email && <span className='text-sm text-red-800'>This field is required!</span>}
                        </div>
                        <div className='mt-7 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='bg-white text-black dark:text-white dark:bg-slate-900 w-80 px-3 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            /><br />
                            {errors.password && <span className='text-sm text-red-800'>This field is required!</span>}
                            <br /><br />
                        </div>
                        <div className='flex justify-between'>
                            <button className='dark:text-white dark:border-white mt-5 border-2 border-black font-serif font-bold rounded-md cursor-pointer hover:bg-green-500 duration-200 py-1 px-2 text-black'>
                                Signup
                            </button>
                            <p className='mt-6'>Already signed up? <Link to='/' className='underline text-blue-500'>Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
