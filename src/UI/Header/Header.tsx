"use client"
import {  signOut } from "next-auth/react"
import { motion } from "framer-motion"
import React, { useState } from 'react'
import logo from "../../image/fabby.png"
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import indIcon from "../../image/india.png"
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import card from "../../image/cart.png"
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useSelector } from "react-redux"
function Header() {

    const {data : session} = useSession()

   //  profile login area start
     const [loginProfile,setLoginProfile] = useState(false)
     const profileHandler = ()=>{
      setLoginProfile(!loginProfile)
     }
     //  profile login area end
    
   const [closeMenu,setCloseMenu] = useState(false)
   const handleMouseEnter = ()=>{
      setCloseMenu(true)
   }

   const handleMouseLeave =()=>{
      setCloseMenu(false)
   }


   const [signIn,setSignIn] = useState(false)
   const signUpIn =()=>{
      setSignIn(true)
   }

   const signUpMouseOut =()=>{
      setSignIn(false)
   }

   const accountLink = [
      { name : "create a wish list",id:1},
      { name : "Wish for any web site",id:2},
      { name : "Baby wish list",id:3},
      { name : "Baby wish list",id:4},
      { name : "Explore ShowRoom",id:5},
      { name : "create a wish list",id:6},
      { name : "create a wish list",id:7},
   ]

   const accountsLink = [
      {name : "your accounts",id:1},
      {name : "your Order",id:2},
      {name : "your wish list",id:3},
      {name : "your primer membership",id:4},
      {name : "your seller  accounts",id:5},
      {name : "your manage count",id:6},
      {name : "Create your free busness",id:7},
      
     
   ]
 
    const product = useSelector((item:any)=>item.addCart?.addCart)
    return (

         <div className="all-container sticky top-0 z-50">
         <div className="main bg-[#131921] lg:flex justify-between  ">
            <div className="all-content flex justify-between    items-center mx-4 py-2 cursor-pointer">
               {/*=================== header logo area start============== */}
               <div className="logo-area flex ">
                   <Link href="/" className="logo-area duration-300  hover:border-[white] p-1 border  border-transparent ">
                   <Image src={logo} alt="Example" width={100} height={200} />
                   </Link>
                   {/* location area start */}
                   <div className="location hidden w-[200px] flex gap-1  items-center  duration-300  hover:border-[white] p-1 border  border-transparent">
                        <div className="location-icon">
                           <IoLocationOutline className="text-white mt-2 w-4 h-5"/>
                        </div>
                        <div className="location-address leading-[14px] ">
                            <p className="text-[#C4C4C4] text-[14px] font-semibold">Delivery to Dhaka </p>
                            <p className="text-[#FFFFFF] text-[14px] font-bold">Update location</p>
                        </div>
                   </div>
                   {/* location area start */}
               </div>
               {/*=================== header logo area end============== */}
          {/*==================== header search area start================== */}
               <div  className="search-area w-[650px] hidden   overflow-hidden focus-within:border-[#FF9900] border-[3px] border-transparent    rounded-md">
                    <div className="input-area flex   items-center z-40">
                            <div className="dropdown-content relative">
                                <select className="py-[8px] px-2 appearance-none  hover:bg-[#D4D4D4] duration-300  outline-none bg-[#E6E6E6] cursor-pointer" name="" id="">
                                    <option value="">All</option>
                                    <option value="">ladies</option>
                                    <option value="">shows</option>
                                </select>
                            </div>
                        <input className="w-full outline-none h-full py-[11px] px-3 " type="text" placeholder="Search amajhon in"/>
                        <div className="icon bg-[#F3A847] px-3 py-[8px]">
                            <IoSearchSharp className=" text-2xl text-[#333333]"  />
                        </div>
                    </div>
                    
                </div>
             {/*==================== header search area end================== */}
            {/*======================== countery are start===================== */}
                <div className="menu-area  flex gap-4  items-center text-white justify-between">
                    <div className="countery-area hidden md:block">
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flag-area p-4 ">
                           <div  className="countery relative  h-[70%]">
                               <div className="ind-flag flex gap-1 text-sm  font-semibold">
                                 <Image src={indIcon} alt="Example" width={20} height={20} />
                                 <div className="text-item flex items-center">IN  <MdArrowDropDown className="text-xl" /></div>
                               </div>
                           </div>
                           {
                            closeMenu && (
                              <div onMouseEnter={handleMouseEnter} className="incuked bg-[white] z-50 top-14 absolute text-black">
                              <div className="all-item mx-4 my-4">
                                  <div className="radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Arob Amirat - AR</p>
                                  </div>
                                  <div className="bordee h-[1px] ml-6 my-2 bg-black width-full"></div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Itali - IT</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">China - CH</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Pakistan - PK</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Arabs - AR</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Spanish - SP</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Hindi - HN</p>
                                  </div>
                                  <div className=" my-2 radio-item flex gap-2 group items-center">
                                     <input className="w-4 h-4  ring-red-500" type="radio" /> <p className="text-sm hover:text-[#E47911] duration-300 group-hover:underline">Tamil - TM</p>
                                  </div>
                                  {/*=============== learn more area start=================== */}
                                   <div className="learn-more">
                                      <div className="learn ml-6">
                                        <p className="text-sm text-[#5297D4] hover:underline under">Learn more</p>
                                        <div className="bordee h-[1px] my-2 bg-black width-full"></div>
                                      </div>
                                   </div>
                                  {/*============== learn more area  end =====================*/}
                                  <div className="current-location-market flex gap-2 text-sm">
                                      <Image src={indIcon} alt="Example" width={20} height={20} /> <p>Your are shoping on Amajhon </p>
                                  </div>
                                  <div className="change-countery my-2 ml-7">
                                     <p className="text-sm mx-0 w-full hover:underline">Change countery/regin</p>
                                  </div>
                              </div>
                              <div className="h-4 w-4 rotate-45 ml-4  bg-[white] absolute top-[-6px]"></div>
                           </div>
                            )  
                           }
                        </div>
                    </div>
                    {/* accounts are start start */}

                    { 

                     session?.user ?    (
                           // after login profile area
                           <div className="all-profile relative hidden">
                               <div onClick={profileHandler}  className="profile flex items-center  gap-1">
                                    <div className="">
                                       <Image className="rounded-full" src={session?.user.image !} width={50} height={50} alt="image"></Image>
                                    </div>
                                    <div className="">
                                       <p className="text-xs">{session?.user?.name}</p>
                                       <p className="text-xs">{session?.user?.email}</p>
                                    </div>
                              </div>
                              {/* profile click area start */}
                              {
                                 loginProfile ?
                              <motion.div
                                 onClick={()=>signOut()} 
                                 initial={{ opacity: 0, y: 50 }}  
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5 }} 
                                 className="all-setting absolute w-[200px] bg-slate-50 text-black">
                                 <div className="all-content px-2 py-2">
                                     <p>Log out</p> 
                                 </div>
                              </motion.div> : ""
                              }
                              
                              {/* profile click area end */}
                          </div>
                           

                           
                        ) :
                    <div onMouseEnter={signUpIn} onMouseLeave={signUpMouseOut} className="profile p-2 hoverBorder relative">
                      <div className="main-area">
                      <Link href="/login">
                        <div className="content font-MainFont leading-[14px] ">
                           <p className="text-[12px] font-medium">Hello sign in</p>
                           <div className="flex">
                              <p className="text-[14px]">Accounts and List</p> 
                              <MdArrowDropDown className="text-xl"   />
                           </div>
                        </div>
                      </Link>
                      </div>
                      {/*========================== sign in hover area start============================= */}
                        {
                           signIn && (
                              <div onMouseEnter={signUpIn}  className="conten absolute  right-[-100px] top-12 w-[500px] h-[200px]">
                              <div className="all-content  bg-white text-black p-8 ">
                                 <div className="sign-button flex justify-center">
                                     <Link className="bg-[#FFD814] text-sm w-[200px] text-center py-1 rounded-md" href="">Sign In</Link>  
                                 </div>
                                  <div className=" text-center my-2">
                                     <p className="text-xs">New customere ? <span className="hover:text-[#FFD814] text-[#08A0E9] duration-300">Start here</span></p>
                                  </div>
                                  <div className="h-[1px] w-full bg-[#EEEEEE]  px-2"></div>
                                  <div className="account-link mt-2 flex justify-between">
                                    <div className="link bg-red w-1/2">
                                       <h1 className="font-MainFont font-semibold text-[#484948] text-[16px]">Your List</h1>
                                        <div className="link-Item">
                                          {
                                             accountLink.map((item:any)=>                                      
                                                <div key={item.id}>
                                                     <Link  href="/" className="text-[13px] text-[#444444]  hover:text-[#F0B379] duration-300 hover:underline">{item.name}</Link>
                                                </div>
                                             )
                                          }
                                         
                                        </div>
                                    </div>
                                    <div className="account w-1/2  flex gap-4">
                                       <div className="link bg-[#EEEEEE] w-[1px] h-[200px]"></div>
                                       <div className="">
                                       <h1 className="font-MainFont font-semibold text-[#484948] text-[16px]">Your </h1>
                                       {
                                             accountsLink.map((item:any)=>
                                                <div key={item.id}>
                                                     <Link  href="/" className="text-[13px] text-[#444444]  hover:text-[#F0B379] duration-300 hover:underline">{item.name}</Link>
                                                </div>
                                             )
                                          }
                                       </div>
                                    </div>
                                  </div>
                                  <div className="main absolute top-[-8px] right-[105px] ">
                                     <div className="main bg-[white] p-2 rotate-45 ">
                                     </div>
                                  </div>
                              </div>
                          </div> 
                           )
                        }
                       
                      {/*========================== sign in hover area end============================= */}
                    </div>

                   } 
                    {/* accounts area end */}
                    <div className="order hidden">
                     <div className="profile hoverBorder ">
                        <div className="content w-[60px] font-MainFont leading-[14px] ">
                           <p className="text-[12px] font-medium">Return</p>
                           <div className="">
                              <p className="text-[14px] ">& Order</p> 
                           </div>
                        </div>
                    </div>
                    </div>
                    <Link href="/cart" className="card">
                     <div className="profile hoverBorder ">
                        <div className="content font-MainFont leading-[14px] relative flex item-center ">
                          <Image src={card} alt="Example" width={40} height={40} /> 
                            <span className="mt-4">Cart</span>
                           <div className=" absolute top-[1px] left-[20px]">
                              <p className="text-[#F08804] font-MainFont">{product.length}</p>
                           </div>
                        </div>
                        <div className="main">
                          
                        </div>
                    </div>
                    </Link>
                </div>
            {/*======================== countery are end===================*/}
            </div>
            </div>
            {/* ============drop down area start=================== */}
               
            {/* ============drop down area end=================== */}
         </div>
    )
}

export default Header
