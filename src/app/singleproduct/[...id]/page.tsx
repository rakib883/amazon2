'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { FaRegStar } from "react-icons/fa";
import PriceFormat from '@/UI/PriceFormat';
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { useDispatch,  } from 'react-redux';
import { addProduct, decrement, increment } from '@/Redux/amazoneSlice';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';


interface Product{
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  quentity:number;
  zoomSrc:string;
  
}



function Page({ searchParams }: { searchParams: any }) {
  // Review area start
  const [review, setReview] = useState(false);
  const reviewHandler = () => {
    setReview(true);
  };
  // Review area end

  const [loading, setLoading] = useState(true);
  const [getdata, setGetdata] = useState<Product | null>(null);
  const { _id } = searchParams;
  const incrementDispatch = useDispatch();
  const decrementDispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonserver.reactbd.com/amazonpro/${_id}`);
  
        if (!response.ok) {
          throw new Error("Data fetching problem");
        }
  
        const data = await response.json();
        setGetdata(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [_id]);
   

  // dara send to redux start
  const addRedux = useDispatch()
  // data send redux end
  console.log(getdata?.image)
  return (
    <div className="py-8 mx-8">
      {
        loading ?
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
          :
          getdata &&
          <div className="main gap-4 grid md:grid-cols-5">
            <div className="image-area w-full h-[500px] md:col-span-2 relative">
                <InnerImageZoom 
                    src={getdata?.image}  
                    zoomSrc={getdata?.image} 
                    zoomType="hover"
                    zoomPreload={true}
                 />
               {/* <Image 
                  src={getdata?.image } 
                  fill={true} alt="image" 
                  zoomSrc="https://your-image-source.com/image-large.jpg" 
                  zoomType="hover"
                  zoomPreload={true}
                />  */}
            </div>
            <div className="text-area w-full md:col-span-3 ">
              <p className="text-[24px] font-mainFont">{getdata?.title}</p>
              <p className="font-MainFont">{getdata?.description}</p>
              <div className="star-area flex gap-2 py-2">
                <FaRegStar onClick={reviewHandler} className={`${review ? "text-[green]" : ""} cursor-pointer`} />
                <FaRegStar onClick={reviewHandler} className={`${review ? "text-[green]" : ""} cursor-pointer`} />
                <FaRegStar onClick={reviewHandler} className={`${review ? "text-[green]" : ""} cursor-pointer`} />
                <FaRegStar onClick={reviewHandler} className={`${review ? "text-[green]" : ""} cursor-pointer`} />
                <FaRegStar onClick={reviewHandler} className={`${review ? "text-[green]" : ""} cursor-pointer`} />
                <p className="font-mainFont">(review)</p>
              </div>

              {/* Price area start */}
              <div className="prize-area flex items-center gap-2">
                <div className="new">
                  <PriceFormat className="font-semibold text-3xl" prize={getdata?.price} />
                </div>
                <div className="old mt-4 font-semibold">
                  <del><PriceFormat className="" prize={getdata?.previousPrice} /></del>
                </div>
              </div>
              {/* Price area end */}
              {/* Increment/Decrement area start */}
              <div className="increment flex items-center gap-8 overflow-hidden mt-4 border-[1px] border-black max-w-[170px] justify-center">
                <div
                   onClick={()=>incrementDispatch(increment({
                     id:getdata?._id,
                     title:getdata?.title,
                     price:getdata?.price,
                     quentity:getdata?.quentity,
                   }))}
                  className="increment bg-[#F3A847] p-4 cursor-pointer">
                   <FaPlus className="text-md cursor-pointer font-bold" />
                </div>
                <div className="prize text-md cursor-pointer font-bold">{getdata?.quantity}</div>
                <div 
                  onClick={()=>decrementDispatch(decrement({
                    id:getdata?._id,
                    image:getdata?.image,
                    title:getdata?.title,
                    price:getdata?.price,
                    quantity:getdata?.quantity,
                  }))}
                className="decrement bg-[#F3A847] p-4 cursor-pointer">
                  <GoDash className="text-md font-bold" />
                </div>
              </div>
              {/* Increment/Decrement area end */}
              {/* Add to bag area start */}
              <div onClick={()=>addRedux(addProduct(
                {
                       id : getdata._id, 
                       image : getdata?.image,
                       title:getdata?.title,
                       price :getdata?.price,
                       quentity:1
                }
              ))} className="increment cursor-pointer flex items-center gap-8 overflow-hidden hover:bg-orange-400 duration-300 bg-[#F3A847] py-2 mt-4 border-[1px] border-black max-w-[170px] justify-center">
                Add to cart
              </div>
              {/* Add to bag end */}
            </div>
          </div>
      }
    </div>
  );
}

export default Page;
