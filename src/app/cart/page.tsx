'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { FaXmark } from "react-icons/fa6";
import { clearProductCart, decrement, increment, productDelete } from '@/Redux/amazoneSlice';
import Swal from 'sweetalert2';
import PriceFormat from '@/UI/PriceFormat';
import { useEffect, useState } from 'react';
import { MdLogout } from "react-icons/md";

// Define types for state and dispatch
interface RootState {
  addCart: {
    addCart: {
      id: string;
      title: string;
      price: number;
      quentity: number;
      image: string;
    }[];
  };
}

function Page() {
  const gettingData = useSelector((state: RootState) => state.addCart?.addCart); // Ensure it's an array

  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState<number>(0); // Initialize with 0

  useEffect(() => {
    let totalPrize = 0;
    gettingData.forEach((item) => {
      totalPrize += item.quentity * item.price;
    });
    setSubTotal(totalPrize);
  }, [gettingData]);

  const resetHandler = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Clear your cart items",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, I Reset",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearProductCart());
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your cart has been cleared.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your cart is safe.",
          icon: "error"
        });
      }
    });
  };

  return (
    <div className="">
        <div className="hidden md:block">
          <div className="grid ">
            {gettingData.length > 0 ?
              <table className="border-collapse border md:mx-[80px] my-8 border-slate-400 text-center">
                <thead className="bg-[gray] w-full">
                  <tr className="w-full">
                    <th className="">Name</th>
                    <th className="">Price</th>
                    <th className="">Quentity</th>
                    <th className="">Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="">
                  {gettingData.map((item:any) => (
                    <tr className="text-center" key={item.id}>
                      <td className="">
                        <div className="image flex  md:gap-4 items-center">
                          <Image className="mx-4 my-2" src={item?.image} alt="img" width={50} height={50} />
                          <p className="text-base">{item?.title}</p>
                        </div>
                        <div className="title"></div>
                      </td>
                      <td><PriceFormat className="" prize={item?.price} /></td>
                      <td className="inline-flex gap-4 items-center justify-center border-[1px] border-[white] text-center">
                        <div onClick={() => dispatch(increment({ id: item?.id }))} className="increment text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">+</div>
                        <div className="decrement text-[15px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">{item?.quentity}</div>
                        <div onClick={() => dispatch(decrement({ id: item?.id }))} className="decrement text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">-</div>
                      </td>
                      <td>
                        <PriceFormat className="" prize={item?.price * item?.quentity} />
                      </td>
                      <td className="inline-block my-8 text-center cursor-pointer">
                        <FaXmark onClick={() => dispatch(productDelete(item?.id))} className="text-center text-[25px] hover:rotate-180" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> :
              <div className="no my-10">
                <div className="tex">
                  <p className="font-MainFont font-bold text-xl text-center">No Item selected</p>
                </div>
              </div>
            }
          </div> 
        </div>  
     {/* mobile jcart area start */}
        <div className="mobile md:hidden">
            {/* mobile menu title start */}
          {gettingData.length > 0 ?  
            <div className="title">
               <h1 className="font-mainFont text-[24px] my-2 font-bold text-center">Your cart</h1>
               <div className="main">
                  {
                    gettingData.map((item:any)=>
                       <div key={item.id} className="all">
                          <div className="image-area my-1 flex justify-between items-center mx-2 cursor-pointer ">
                             <div className="image flex gap-2 items-center">
                                <div className="image">
                                   <Image src={item?.image} width={50} height={50} alt="img"/>
                                </div>
                                <div className="title">
                                  <p>{item?.title}</p>
                                </div>
                             </div>
                             <div className="prize flex items-center gap-2">
                                 <PriceFormat className="" prize={item?.price} />
                                 <div className="inline-block my-8 text-center cursor-pointer">
                                    <FaXmark onClick={() => dispatch(productDelete(item?.id))} className="text-center text-[25px] hover:rotate-180" />
                                 </div>
                             </div>
                          </div>
                       </div>
                    
                    )}
               </div>
             </div> :  "" 
            }
            {/* mobile menu title-end */}
         </div>
      {/* mobile cart area en */}
        
      <div className="">
        {gettingData.length > 0 ?
          <div className="all md:flex md:mx-[80px]">
            <div className="item w-full md:w-[70%]"></div>
            <div className="item drop-shadow-lg rounded-md w-full md:w-[30%] flex flex-col gap-4 border-[1px] border-[#94A3B8] p-4">
              {/* Subtotal area start */}
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Subtotal</p>
                <p><PriceFormat className="" prize={subTotal} /></p>
              </div>
              {/* Subtotal area end */}
              {/* Shipping area start */}
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              {/* Shipping end */}
              {/* Country area start */}
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Country</p>
                <p>Bangladesh</p>
              </div>
              {/* Country area end */}

              {/* Total area start */}
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Total</p>
                <PriceFormat className="" prize={subTotal} />
              </div>
              {/* Total area end */}
              <div className="bg-[#F3A847] font-mainFont text-center py-2 cursor-pointer hover:bg-[#232F3E] duration-300 text-white flex justify-center gap-2 items-center">
                <p>Proceed to Checkout</p>
                <MdLogout />
              </div>
            </div>
          </div> : ""
        }
      </div>
    </div>
  );
}

export default Page;
