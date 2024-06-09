import React from 'react'
import FoterHeader from './FoterHeader'
import { TbWorld } from "react-icons/tb";
import foterIcon from "../image/india.png"
import Image from 'next/image';
import foterIconBottom from "../image/login.png"
function Foter() {
    const getUs = [
        {title : "About Us",id:1},
        {title : "Careers",id:2},
        {title : "Press Releases",id:3}, 
        {title : "Amazon Science",id:4},      
    ]
    const connectUsFoter = [
       {title:"Facebook",id:1},
       {title:"twiter",id:2},
       {title:"instgram",id:3},
    ]

    const makeMoney = [              	
      {title:"Sell on Amazon",id:1},
      {title:"Sell under Amazon Accelerator",id:2},
      {title:"Protect and Build Your Brand",id:3},
      {title:"Amazon Global Selling",id:4},
      {title:"Become an Affiliate",id:5},
      {title:"Fulfilment by Amazon",id:6},
      {title:"Advertise Your Products",id:7},
      {title:"Amazon Pay on Merchants",id:8},
    ]

    const letUs = [
      {title:"COVID-19 and Amazon",id:1},
      {title:" Your Account",id:2},   
      {title:"Returns Centre",id:3},         
      {title:"100% Purchase Protection",id:4},   
      {title:"Amazon App Download",id:5},   
      {title:"COVID-19 and Amazon",id:6},   
    ]

     
    
  return (
    <div className="bg-[#232F3E] mt-4">
        <div className="mx-6">
            <div className="foter-header"></div>
           <div className="content max-w-6xl  grid mx-4 md:grid-cols-4 grid-cols-2 justify-between py-10">
               <div className="first-area">
                 <div className="fot">
                    <FoterHeader className="" title="Get to know us"  />
                    <div className="">
                       {
                          getUs.map(({ id, title }:any) => (
                            <div className="text-[#DDDDDD] font-mainFont my-2 hover:underline duration-300 cursor-pointer" key={id}>{title}</div>
                        ))
                       }
                    </div>
                 </div>
               </div>
               <div className="">
                 <div className="">
                    <div className="foter-header">
                         <FoterHeader className="" title="Connect with us" />
                    </div>
                    <div className="s">
                        {
                          connectUsFoter.map(({id,title})=>
                            <div key={id} className="main">
                                <p className="text-[#DDDDDD] font-mainFont my-2 hover:underline duration-300 cursor-pointer">{title}</p>
                            </div>
                          )
                        }
                    </div>
                 </div>
               </div>
               <div className="first-area">
                {/* make money are start */}
                 <div className="money">
                   <FoterHeader className="" title="make money with us" />
                 </div>
                 <div className="text">
                   {
                       makeMoney.map((item:any)=>
                        <div key={item.id} className="main">
                            <p className="text-[#DDDDDD] font-mainFont my-2 hover:underline duration-300 cursor-pointer">{item.title}</p>
                        </div>
                      )
                   }
                 </div>
                {/* make money ares end */}
               </div>
               {/* let us area start  */}
               <div className="first-area">
                 <div className="header">
                    <FoterHeader className="" title="Let Us Help You" />
                 </div>
                 <div className="">
                   {
                     letUs.map((item:any)=>
                       <div key={item.id} className="main">
                          <p className="text-[#DDDDDD] font-mainFont my-2 hover:underline duration-300 cursor-pointer">{item.title}</p>
                       </div>
                    )
                   }
                 </div>
               </div>
               {/* let us area end */}
           </div>
        </div>
        {/* border area start */}
        <div className="w-full h-[1px] bg-[#DDDDDD]"></div>
         <div className="flex justify-center items-center py-8 gap-10">
               <div className="">
                  <Image src={foterIconBottom} height={100}  width={100} alt="icon"/>
               </div>
               <div className="countery flex gap-4 ">
                  <div className="language flex items-center py-1 justify-center w-[100px] border-[1px] border-[#dddddd] text-[#dddddd] gap-2 cursor-pointer">
                      <TbWorld /> <p>English</p>
                  </div>
                  <div className="counte">
                    <div className="language py-1 flex items-center justify-center w-[100px] border-[1px] border-[#dddddd] text-[#dddddd] gap-2 cursor-pointer">
                        <Image src={foterIcon} height={20} width={20} alt="india" /><p>English</p>
                    </div>
                  </div>
               </div>
         </div>
        {/* border are end */}
    </div>
  )
}

export default Foter