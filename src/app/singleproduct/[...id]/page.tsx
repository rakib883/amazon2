"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { FaRegStar } from "react-icons/fa";
import PriceFormat from '@/UI/PriceFormat';
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";


function Page({searchParams}:{searchParams : any}) {
  //  review area staer
  const [review,setReview] = useState(false)
  const  reviewHandeler = ()=>{
    setReview(true)
  }
  //  review area end

  const [loading,setLoading] = useState(false)
  const [getdata,setGetdata]= useState({})
  const {_id} = searchParams;

 useEffect(()=>{
    const getData = async()=>{
      setLoading(true)
      const response = await fetch(`https://jsonserver.reactbd.com/amazonpro/${_id}`)

      if(!response.ok){
        throw new Error("data faching problem")
      }

      setGetdata(await response.json() )

    }
    return getData
    setLoading(false)
 },[_id])


 console.log(getdata)

  return (
    <div className=" py-8 mx-8">
       {
        
        loading ? 
        <div className="main gap-4 grid  md:grid-cols-5">
          <div className="image-area w-full h-[500px] md:col-span-2 relative">
            <Image src={getdata?.image} fill={true} alt="image"/>
          </div>
          <div className="text-area w-full md:col-span-3 ">
             <p className= "text-[24px] font-mainFont font-">{getdata?.title}</p>
             <p className="font-MainFont">{getdata?.description}</p>
             <div className="star-area flex gap-2 py-2">
                  <FaRegStar onClick={()=>reviewHandeler} className={`${review ? "text-[green]" : " "} cursor-pointer`} />
                  <FaRegStar onClick={()=>reviewHandeler} className={`${review ? "text-[green]" : " "} cursor-pointer`} />
                  <FaRegStar onClick={()=>reviewHandeler} className={`${review ? "text-[green]" : " "} cursor-pointer`} />
                  <FaRegStar onClick={()=>reviewHandeler} className={`${review ? "text-[green]" : " "} cursor-pointer`} />
                  <FaRegStar onClick={()=>reviewHandeler} className={`${review ? "text-[green]" : " "} cursor-pointer`} />
                  <p className="font-mainFont">(review)</p>
             </div>
            
             {/* prize area start */}
             <div className="prize-area flex item-center gap-2">
                <div className="new">
                  <PriceFormat className=" font-semibold text-3xl" prize={getdata?.price} />
                </div>
                <div className="old mt-4 font-semibold">
                  <del> <PriceFormat className="" prize={getdata?.previousPrice} /></del>
                </div>
             </div>
     <div className="increment flex items-center gap-8 overflow-hidden  mt-4   border-[1px] border-black max-w-[170px] justify-center">
               <div className="increment bg-[#F3A847] p-4 cursor-pointer"><FaPlus className=" text-md cursor-pointer font-bold "/></div>
               <div className="prize text-md cursor-pointer font-bold">0</div>
               <div className="decrement bg-[#F3A847] p-4 cursor-pointer"><GoDash className=" text-md  font-bold "/></div>
             </div>
             {/* prize are end */}
             {/* add to bag area start */}
             <div className="increment cursor-pointer flex items-center gap-8 overflow-hidden bg-[#F3A847] py-2  mt-4   border-[1px] border-black max-w-[170px] justify-center">
                Add to bag
             </div>
             {/* add to bag end */}
          </div>
        </div>:

        <div className="flex justify-center items-center max-h-screen">
          <Circles
           height="80"
           width="80"
           color="#4fa94d"
           ariaLabel="circles-loading"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
           />
        </div> 
       }
    </div>
  )
}

export default Page