"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import loginImage from "../../image/login.png"
import Link from 'next/link';
import { RiArrowDropDownFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    // user login area start
     const [user,setUser] = useState({
        userGmail:"",
        userPassword:""
     })

     const loginHandeler =async ()=>{
        try{
            const response = await fetch("http://localhost:3000/api/login",{
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify({
                    userGmail : user.userGmail,
                    userPassword:user.userPassword
                })
            })

            const userData = await response.json()
            console.log("data",userData)
            toast.error(userData?.error)
        }catch(error){
           console.log(error)
        }finally{

        }
     }
    
    // user login are end
    const [signItem,setSignInMenu] = useState(false)
    const loginForget = ()=>{
        setSignInMenu(!signItem)
    }
    return (
        <div className="allCOntent">
            <div className="max-w-sm  mx-auto px-8">
                <div className="logo-icon flex justify-center mt-2">
                    <Image src={loginImage} alt="icon" width={100} height={80}/>
                </div>
                <div className="main-body border-[1px] border-[#DDDDDD] p-4 my-4 rounded-md">
                    <p className="text-[24px]  font-semibold">Sign In</p>
                    <div className="mobile my-2">
                        <p className="text-[13px] font-semibold ">Email or mobile phone number</p>
                        <input value={user.userGmail} onChange={(e)=>setUser({...user,userGmail:e.target.value})} type="text" className="w-full border-[1px] focus-within: outline-[#C8F3FA] py-[2px] px-1 rounded-[3px]  border-[#A6A6A6]" placeholder="inter your email or phone number" />
                         
                        <p className="text-[13px] font-semibold ">Password</p>
                        <input value={user.userPassword} onChange={(e)=>setUser({...user,userPassword:e.target.value })} type="text" className="w-full border-[1px] focus-within: outline-[#C8F3FA] py-[2px] px-1 rounded-[3px]  border-[#A6A6A6]" placeholder="inter your password" />
                        
                         <div onClick={loginHandeler} className="bg-[#F7CA00] cursor-pointer duration-300 py-2 text-[13px] mt-4 rounded-md text-center hover:bg-[#F0C14B]">
                             Continue
                             <ToastContainer />
                         </div>
                        
                    </div>
                    <div className="cursor-pointer">
                        <p className="text-[12px]">
                           By continuing, you agree to Amazon's <span className="textHover">Conditions of Use</span> and <span className="textHover">Privacy Notice.</span>
                        </p>
                    </div>
                    <div onClick={loginForget} className="botttom-arrow hover:text-[#D77D00] duration-300 hover:underline flex items-center text-[13px] mt-3 cursor-pointer" >
                       <p><RiArrowDropDownFill /></p> <p>Need help ?</p>
                    </div>
                     <div className="">
                       {
                          signItem && (
                            <div className="iner-text text-[13px] my-1 ml-4 ">
                                <p className="text-[#0066C0] duration-300 cursor-pointer hover:text-[#D77D00] hover:underline">Forgoot password</p>
                                <p className="text-[#0066C0] duration-300 cursor-pointer hover:text-[#D77D00] hover:underline">Other issue in sign in</p>
                             </div>
                            )
                        }
                     </div>
                     <div className="border-area h-[1px] w-full bg-[#E7E7E7] my-4"></div>
                     <div className="">
                        <h1 className="text-[13px] font-bold">Buiying for work ?</h1>
                        <p className="duration-300 cursor-pointer hover:text-[#D77D00] hover:underline text-[13px]">Shop on amazon Busness</p>
                     </div>
                </div>
                <div className="flex items-center gap-1 text-[13px] ">
                   <div className="left h-[1px]  grow bg-[#E7E7E7] "></div>
                   <div className="center grow-0">
                     <p>New to Amazon?</p>
                   </div>
                   <div className="right h-[1px] grow bg-[#E7E7E7] "></div>
                </div>
                <Link href="/registration">
                    <div className="bottom rounded-md text-[13px] py-2 hover:bg-[#F7FAFA] duration-300 font-semibold border-[1px] border-[#D5D9D9]  my-2 text-center">Create your amajon Accounts</div>
                </Link>
            </div>
        </div>
    );
};

export default Login;