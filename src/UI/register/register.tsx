"use client"

import Image from 'next/image';
import register from "../../image/login.png";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import Loader from '../loader/Loader';
import { useDispatch } from 'react-redux';
import {  loginUser } from '@/Redux/amazoneSlice';
import { useRouter } from 'next/navigation';


const Register = () => {
    const [loginLoader, setLoginLoader] = useState(false);
    const [userData, setUserData] = useState({
        useName: "",
        userGmail: "",
        userPassword: ""
    });

    const registerHandler = async () => {
        if (userData.useName === "") {
            toast.error("Enter your user name");
        } else if (userData.userGmail === "") {
            toast.error("Enter your gmail");
        } else if (userData.userPassword === "") {
            toast.error("Enter your password");
        } else {
            try {
                setLoginLoader(true);
                const response = await fetch("http://localhost:3000/api/register", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        useName: userData.useName,
                        userGmail: userData.userGmail,
                        userPassword: userData.userPassword
                    })
                });

                const data = await response.json();
                if (data.error) {
                    toast.error(data.error);
                } else {
                    toast.success(data.message);
                }
            } catch (error) {
                console.error(error);
                toast.error("An error occurred. Please try again.");
            } finally {
                setLoginLoader(false);
            }
        }
    };
  const {data : session} = useSession()
  const userInfo = session?.user
  const dispatchUser = useDispatch()
  
  useEffect(()=>{
    dispatchUser(loginUser(userInfo))
  },[session?.user])

// abefore login action home page start
 const router = useRouter()
 useEffect(()=>{
    if(session?.user){
       router.push("/")
    }
 },[session?.user,router])
// abefore login action home page end
  
    return (
        <div>
            {loginLoader ? (
                <div className="loader flex justify-center items-center h-screen max-w-lg mx-auto">
                    <Loader/>
                </div>
            ) : (
                <div className="all-content max-w-sm mx-auto">
                    <Link href="/" className="logo-area flex justify-center mt-4 cursor-pointer">
                        <Image src={register} alt="register" height={100} width={90} />
                    </Link>
                    <div className="content-area border-[1px] border-[#DDDDDD] p-4 mt-4">
                        <h1 className="text-[24px]">Create Account</h1>
                        <div className="all-input-filed">
                            <div className="input-area my-2">
                                <h1 className="font-semibold text-[14px]">Enter Your Name</h1>
                                <input
                                    value={userData.useName}
                                    onChange={(e) => setUserData({ ...userData, useName: e.target.value })}
                                    placeholder="Enter your name"
                                    className="mt-1 border-[#DDDDDD] rounded-md px-2 py-1 w-full placeholder:text-[#767676] focus-within:outline-[#C8F3FA] outline-[2px] border-[1px]"
                                    type="text"
                                />
                            </div>
                            <div className="input-area my-2">
                                <h1 className="font-semibold text-[14px]">Enter Your Gmail</h1>
                                <input
                                    value={userData.userGmail}
                                    onChange={(e) => setUserData({ ...userData, userGmail: e.target.value })}
                                    placeholder="Enter your gmail"
                                    className="mt-1 border-[#DDDDDD] rounded-md px-2 py-1 w-full placeholder:text-[#767676] focus-within:outline-[#C8F3FA] outline-[2px] border-[1px]"
                                    type="text"
                                />
                            </div>
                            <div className="input-area my-2">
                                <h1 className="font-semibold text-[14px]">Enter Your Password</h1>
                                <input
                                    value={userData.userPassword}
                                    onChange={(e) => setUserData({ ...userData, userPassword: e.target.value })}
                                    placeholder="Enter your password"
                                    className="mt-1 border-[#DDDDDD] rounded-md px-2 py-1 w-full placeholder:text-[#767676] focus-within:outline-[#C8F3FA] outline-[2px] border-[1px]"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div onClick={registerHandler} className="button-area cursor-pointer w-full bg-[#EFC04D] rounded-md py-1 text-center">
                            <div className="w-full">Continue</div>
                        </div>
                        <ToastContainer />
                        <div className="flex my-4">
                            <p>You have an account? </p>
                            <Link href="/login" className="hover:text-[#EFC04D] duration-300 ml-1">Sign in</Link>
                        </div>
                           <div className="social flex justify-center gap-4">
                                <div onClick={() => signIn()} className="login-google cursor-pointer">
                                    <button><FaGoogle className="text-2xl" /></button>
                                </div>
                            <div onClick={() => signIn()} className="login-google cursor-pointer">
                                 {/* <button><FaGithub className="text-2xl"  /></button>  */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
