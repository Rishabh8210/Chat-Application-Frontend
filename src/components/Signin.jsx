import React, { useState } from "react";
// import axios from 'axios'
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/SigninSignup";
import Signup from "./Signup";

const initialValues = {
    email: "",
    password: ""
};

const Signin = ({trigger, setTrigger}) => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: async(values, action) => {
                console.log(
                    "file: Registration.jsx ~ line 11 ~ Registration ~ values",
                    values
                );
                
                action.resetForm();
            },
        });
    console.log(
        "file: Registration.jsx ~ line 25 ~ Registration ~ errors",
        errors
    );


    async function handleForm(event){
        event.preventDefault();
        try {
            const data = {
                email: values.email,
                password: values.password
            }
            console.log(data)
            // const response = await axios.post('http://localhost:3000/api/v1/user/signin', data);
            // localStorage.setItem('token', response.data.token);
            // localStorage.setItem('name', response.data.name);
            // console.log('Response from server:', response.data.data.name);
            // window.location = '/dashboard';
        } catch (error) {
            window.location = '/';
            console.error('Error registering user:', error);
        }
    }

    const [isSignUpOpen, setSignUpOpen] = useState(false)
    function clickEvent(event){
        event.preventDefault();
        setSignUpOpen(!isSignUpOpen)
        // setTriggerRegistration(false)
    }
    if(isSignUpOpen)
        return <Signup trigger = {isSignUpOpen} setTrigger = {setSignUpOpen} />
    return (
        <div className='fixed z-20 top-0 left-0 h-screen w-full px-5 flex flex-col justify-center items-center bg-zinc-800 bg-opacity-50'>
            <div className='min-h-[60vh] max-h-[90vh] w-full bg-white shadow-lg flex flex-col justify-center items-center rounded-lg p-5'>
                <div className='h-10 w-full px-2 flex justify-between'>
                    <p className='font-semibold text-3xl border-b-4 border-black'>Welcome !</p>
                    <button className='h-full w-10 text-base text-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-lg font-bold' onClick={() => setTrigger(!trigger)}>X</button>
                </div>
                <div className="w-full py-7">
                    {/* <form onSubmit={(event) => handleForm(event)}> */}
                    <form>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-black-600 focus-within:border-opacity-100">
                            <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest transition-all">
                                Email
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <p className="text-xs text-red-600">{errors.email}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col py-1 px-2 border-x border-y border-black border-opacity-30 rounded-md transition-all mb-5 focus-within:border-black-600 focus-within:border-opacity-100">
                            <label htmlFor="password" className="text-[10px] uppercase font-bold tracking-widest transition-all">
                                Password
                            </label>
                            <input
                                className="px-0 outline-0 pl-2 text-base placeholder:text-black placeholder:text-opacity-50 focus-within:outline-none"
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                                 <p className="text-xs text-red-600">{errors.password}</p>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <a href="#" className="border-b-2 border-black">
                                Forget password
                            </a>
                            <button className="border-b-2 border-black" onClick={(event)=> clickEvent(event)}>
                                Create a new Account? Sign up 
                            </button>
                            <button className="py-3 px-4 outline-0 uppercase border-0 rounded-md text-white bg-black hover:bg-black transition-all" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signin;