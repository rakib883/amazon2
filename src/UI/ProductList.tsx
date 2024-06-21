"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import FormattedPrice from './PrizeCurrency';
import { MdGridOn, MdTableRows } from "react-icons/md";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addProduct } from '@/Redux/amazoneSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface listType{
  aos:any;
}



function ProductList({ product }: any) {
  const [gridProduct, setGridProduct] = useState(0);

  const gridSystem = (index: number) => {
    setGridProduct(index);
  };
   
   useEffect(()=>{
      AOS.init({duration: "2500"});
   },)

  // dispatch area staer
   const cartDispatch = useDispatch()
  // dispatch area end

  return (
    <div>
      <div className="cols-ch py-2 cursor-pointer mt-[-160px]">
        <div className="main bg-white rounded-md flex justify-between py-2">
          <div className="rows flex gap-4 mx-2">
            <div
              onClick={() => gridSystem(1)}
              className={`${gridProduct === 1 ? "bg-gray-800 text-white" : ""} grid cursor-pointer`}
            >
              <MdGridOn className="text-[24px]" />
            </div>
            <div
              onClick={() => gridSystem(0)}
              className={`${gridProduct === 0 ? "bg-gray-800 text-white" : ""} grid cursor-pointer`}
            >
              <MdTableRows className="text-[24px]" />
            </div>
          </div>
          <div className="heading"></div>
          <div></div>
        </div>
      </div>
      <div
        className={`${
          gridProduct === 0
            ? "all flex flex-col gap-4"
            : "grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-3 cursor-pointer"
        }`}
      >
        {product.map((item: any) => (
          <div data-aos="zoom-in"
            key={item?._id}
            className={`${
              gridProduct === 0
                ? "main grid items-center cursor-pointer md:grid-cols-5 bg-[white] gap-10"
                : "border-[1px] rounded-md border-black overflow-hidden"
            }`}
          >
            <Link
              href={{
                pathname: `/singleproduct/${item?._id}`,
                query: { _id: item?._id },
              }}
              className="image col-span-1 w-full"
            >
              <div className="image-area relative">
                <Image
                  className="rounded-md"
                  src={item?.image}
                  width={500}
                  height={500}
                  layout=''
                  alt="image"
                />
                <div className="brand absolute top-0 p-2 bg-green-700">
                  <p className="text-white rounded-sm font-MainFont font-semibold">
                    {item?.brand}
                  </p>
                </div>
              </div>
            </Link>
            <div className={`${gridProduct === 0 ? "all-text  md:col-span-4 " : "mx-2"}`}>
              <div className="title mx-4 md:mx-0">
                <p className="font-semibold text-lg font-MainFont">{item?.title}</p>
                <p className="font-semibold text-md first-letter:uppercase font-MainFont">
                  Category: {item?.category}
                </p>
                <p className="text-[14px] font-MainFont font-semibold">
                  {item?.description.substring(0, 100)}...
                </p>
                <div className="react-area my-4 flex gap-2">
                  <FaRegStar className="cursor-pointer" />
                  <FaRegStar className="cursor-pointer" />
                  <FaRegStar className="cursor-pointer" />
                  <FaRegStar className="cursor-pointer" />
                  <FaRegStar className="cursor-pointer" />
                  <span className="font-MainFont">(review)</span>
                </div>
                <div className="prize flex gap-2 items-center">
                  <p className="font-MainFont text-[24px] font-semibold">
                    <FormattedPrice amount={item?.price} />
                  </p>
                  <p className="font-MainFont text-md font-semibold mt-3">
                    <del>
                      <FormattedPrice amount={item?.previousPrice} />
                    </del>
                  </p>
                </div>
                <div
                 onClick={()=>cartDispatch(addProduct({
                       id : item._id, 
                       image : item?.image,
                       title:item?.title,
                       price :item?.price,
                       quentity:1
                 })) && toast.success(`${item?.title} add to cart succesfully` ) }
                className="bg-[green] w-full md:block hover:bg-black  hover:text-white duration-300 cursor-pointer font-MainFont  my-2 text-center py-2 rounded-sm text-white">
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer autoClose={100} />
    </div>
  );
}

export default ProductList;
