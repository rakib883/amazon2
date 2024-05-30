'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { FaXmark } from "react-icons/fa6";
import { clearProductCart, decrement, increment, productDelete} from '@/Redux/amazoneSlice';
import Swal from 'sweetalert2';
import PriceFormat from '@/UI/PriceFormat';
import { useEffect, useState } from 'react';
import { MdLogout } from "react-icons/md";

export interface amajon{
  state:string,
 
}

function Page() {

  const gettingData = useSelector((state:amajon) => state.addCart?.addCart); // Ensure it's an array

  const deleteProduct = useDispatch()
  const cardClearDispatch = useDispatch()
  // const [currentProduct,setCurentProduct] = usestate(false)

  // calculet area strat
   const incrementDispatch = useDispatch()
   const decrementDispatch = useDispatch()
   const [subTotal,setSubTotal] = useState()
  // calculet area end
  
    useEffect(()=>{
        let total = 0;

        gettingData.map((item:any)=>{
          total += item.quentity * item.price
          return total
        })

        setSubTotal(total)
       
    },[gettingData])

 const resetHandeler =()=>{
  const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling:true
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Clear your cart items",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, I Reset",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result:any) => {
        if (result.isConfirmed) {
          cardClearDispatch(clearProductCart())
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe ",
            icon: "error"
          });
        }
      });
 } 


  return (
      <div className="grid ">
        {
            gettingData.length > 0 ?
      
          <table className="border-collapse border  md:mx-[80px] my-8 border-slate-400 text-center ">
               <thead className="bg-[gray]">
                   <tr>
                       <th className="">Name</th>
                       <th>Price</th>
                       <th>Quentity</th>
                       <th>Total</th>
                       <th>Remove</th>
                   </tr>
               </thead>
               <tbody >
                   {
                     gettingData.map((item:any)=>(
                        <tr className="text-center" key={item.id}>
                           <td className="">
                               <div className="image flex gap-4 items-center">
                                  <Image className="mx-4 my-2" src={item?.image} alt="img" width={50} height={50} />
                                    <p>{item?.title}</p>
                               </div>
                               <div className="title"></div>
                           </td>
                           <td><PriceFormat className="hidden" prize={item?.price} /></td>
                           <td className="inline-flex gap-4 items-center justfy-center  border-[1px] border-[white]  text-center">
                               <div onClick={()=>incrementDispatch(increment({
                                  id:item?.id
                               }))} className="increment text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">+</div>
                               <div className="decrement text-[15px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">{item?.quentity}</div>
                               <div
                                  onClick={()=>decrementDispatch(decrement({id:item?.id}))}
                                className="decrement text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">-</div>
                           </td>
                           <td>
                              <PriceFormat className="" prize={item?.price * item?.quentity}/>
                           </td>
                           <td className="inline-block my-8 text-center  cursor-pointer">
                              <FaXmark 
                               onClick ={()=>deleteProduct(productDelete(item?.id))}
                               className="text-center text-[25px] hover:rotate-180" />
                            </td>
                        </tr>
                     ))
                   }
               </tbody>
                <div className="">
                   <div onClick={resetHandeler}
                      // onClick={()=>cardClearDispatch(clearProductCart())}
                      className=" w-[100px] cursor-pointer ml-4  bg-[red] font-mainFont font-bold py-2 text-white my-2 ">
                      Cart  reset
                   </div>
                </div>
          </table> 

          :  <div className="no my-10">
                 <div className="tex">
                    <p className="font-MainFont font-bold text-xl text-center">No Item select</p>
                 </div>
             </div>
 
          }
        <div className="">
          {
              gettingData.length > 0 ?
          
           <div className="all md:flex md:mx-[80px]  ">
               <div className="item w-full md:w-[70%]"></div>
               <div className="item drop-shadow-lg rounded-md w-full md:w-[30%] flex flex-col gap-4 border-[1px] border-[#94A3B8] p-4">
                {/* subtotal area start */}
                   <div className="flex justify-between text-xl font-semibold items-center font-MainFont ">
                      <p>Subtotal</p>
                      <p>
                        <PriceFormat className="" prize={subTotal} />
                      </p>
                   </div>
                  {/* subtotaal area end */}
                 
                  {/* Shiping rea start */}
                  <div className="flex justify-between text-xl font-semibold items-center font-MainFont ">
                      <p>Shiping</p>
                      <p>
                         Free
                      </p>
                   </div>
                  {/* shiping end */}
                  {/* state area start */}
                  <div className="flex justify-between text-xl font-semibold items-center font-MainFont ">
                      <p>Countery</p>
                       <p>Bangladesh</p>
                   </div>
                  {/* state area end */}

                  {/* total area start */}
                  <div className="flex justify-between text-xl font-semibold items-center font-MainFont ">
                       <p>Total</p>
                       <PriceFormat className="" prize={subTotal} />
                   </div>
                  {/* total area end */}
                  <div className="bg-[#F3A847]  font-mainFont text-center py-2 cursor-pointer hover:bg-[#232F3E] duration-300 text-white flex justify-center gap-2 items-center">
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







 