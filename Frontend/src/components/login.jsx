import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function login() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userinfo = {

            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("https://book-store-app-lemon.vercel.app/user/login", userinfo);
            console.log(res.data);
            if (res.data) {
                toast.success('LoggedIn Succesfully:)'),
                    document.getElementById("my_modal_3").close(),
                    setTimeout(() => {
                        window.location.reload()
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                    }, 1000);

            }

        } catch (error) {
            console.log("Error Response:", error.response); // Log the full error response

            toast.error("Error: " + (error.response ? error.response.data.message : "Something went wrong"));
            setTimeout(() => { }, 3000);
        }
    }
    return (
        <>
            <div><dialog id="my_modal_3" className="modal dark:text-white ">
                <div className="modal-box bg-white dark:bg-slate-900">
                    <form method="dialog " onSubmit={handleSubmit(onSubmit)} >

                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-2 border-black" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg text-center">Login</h3>
                        <br />
                        <div className='space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none bg-white text-black  dark:text-white dark:bg-slate-900'
                                {...register("email", { required: true })} /> <br />
                            {errors.email && <span className='text-sm text-red-800'>This field is required!</span>}
                        </div>
                        <div className='mt-7 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-80 px-3 border rounded-md outline-none bg-white  dark:bg-slate-900'
                                {...register("password", { required: true })} /><br />
                            {errors.password && <span className='text-sm text-red-800'>This field is required!</span>}
                        </div>
                        <div className='flex justify-between'><button className='mt-5 border-2 border-black font-serif font-bold rounded-md cursor-pointer hover:bg-green-500 duration-200 py-1 px-2 text-black dark:text-white dark:border-white'>Login
                        </button>
                            <p className='mt-7'>Not registered? <Link to={"/signup"} className='underline text-blue-500'>signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
            </div></>
    )
}

export default login
