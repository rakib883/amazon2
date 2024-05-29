"use client"
import Link from 'next/link';
import { FaXmark } from "react-icons/fa6";
import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
const SubHeader = () => {
    // navbar area start
    const [navbar,setNavbar] = useState(false)
    const navbarHandeler = ()=>{
        setNavbar(true)
    }


    const mobilenavbarHandeler = ()=>{
        setNavbar(false)
    }
    // nav bar area end
    const subMenu = [
        {name : "amajhon",path:"/amajhon"},
        {name : "mobile",path:"/amajhon"},
        {name : "best Seller",path:"/amajhon"},
        {name : "new reles",path:"/amajhon"},
    ]
    return (
        <div className="bg-[#232F3E]">
            <div onClick={navbarHandeler} className="all-items text-white flex gap-4  mx-4">
                <div className="icon-area flex items-center cursor-pointer gap-1 text-md">
                  <span className="text-2xl"><HiBars3 /> </span> <span className="text-sm font-bold font-MainFont">All</span>
                </div>
                <div className="flex gap-3 ">
                     {
                        subMenu.map((item:any)=>
                            <div key={item.name} className="items hover:border-white duration-300 py-2 px-1 border-transparent border-[1px]">
                                <Link href={item.path}>{item.name}</Link>
                            </div>
                        )
                     }
                </div>
            </div>
            {/*================== nav are start==================== */}

            {
                navbar ? 
           
              <div  className=" customColor h-screen flex duration-500  w-full fixed bg-[#00000060]  top-0 z-50 ">
                 <div className="content w-1/5 overflow-auto h-screen bg-white">
                    <div className="navHeader sticky top-0 bg-[#232F3E] py-2">
                        <div className="header flex items-center gap-2 px-4">
                        <FaCircleUser className="text-white text-lg" /> <span className="text-white font-md">Hello,sign in</span>
                        </div>
                    </div>
                    <div className="all-menu-items ml-6 my-4">
                         <div className="header font-MainFont font-md  font-bold">
                              <h1>Trending</h1>
                         </div>
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    navbar <br />
                    </div>
                   
                    

                 </div>
                 <div onClick={mobilenavbarHandeler} className="mt-4 bg-[white] h-10 cursor-pointer min-w-10 flex justify-center items-center">
                     <FaXmark />
                 </div>
              </div> : ""
            }
            {/*================== nav are end==================== */}
           
        </div>
    );
};

export default SubHeader;