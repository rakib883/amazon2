'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { FaXmark } from "react-icons/fa6";
import { clearProductCart, decrement, increment, productDelete } from '@/Redux/amazoneSlice';
import Swal from 'sweetalert2';
import PriceFormat from '@/UI/PriceFormat';
import { useEffect, useMemo, useState } from 'react';
import { MdLogout } from "react-icons/md";

function Page() {
  const dispatch = useDispatch();
  const gettingData = useSelector((state) => state.addCart?.addCart) || [];

  const [subTotal, setSubTotal] = useState(0);

  const memoizedGettingData = useMemo(() => gettingData, [gettingData]);

  useEffect(() => {
    let total = 0;
    memoizedGettingData.forEach((item:any) => {
      total += item.quentity * item.price;
    });
    setSubTotal(total);
  }, [memoizedGettingData]);

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
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe ",
          icon: "error"
        });
      }
    });
  };

  return (
    <div className="grid">
      {memoizedGettingData.length > 0 ? (
        <table className="border-collapse border md:mx-[80px] my-8 border-slate-400 text-center">
          <thead className="bg-[gray]">
            <tr>
              <th className="">Name</th>
              <th>Price</th>
              <th>Quentity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {memoizedGettingData.map((item:any) => (
              <tr className="text-center" key={item.id}>
                <td className="">
                  <div className="image flex gap-4 items-center">
                    <Image className="mx-4 my-2" src={item?.image} alt="img" width={50} height={50} />
                    <p>{item?.title}</p>
                  </div>
                </td>
                <td><PriceFormat className="" prize={item?.price} /></td>
                <td className="inline-flex gap-4 items-center justify-center border-[1px] border-[white] text-center">
                  <div
                    onClick={() => dispatch(increment({ id: item?.id }))}
                    className="increment text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10"
                  >
                    +
                  </div>
                  <div className="decrement text-[15px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10">
                    {item?.quentity}
                  </div>
                  <div
                    onClick={() => dispatch(decrement({ id: item?.id }))}
                    className="decrement text-[24px] font-mainFont hover:bg-[green] hover:text-[white] duration-300 px-2 cursor-pointer bg-gray/10"
                  >
                    -
                  </div>
                </td>
                <td><PriceFormat className="" prize={item?.price * item?.quentity} /></td>
                <td className="inline-block my-8 text-center cursor-pointer">
                  <FaXmark
                    onClick={() => dispatch(productDelete(item?.id))}
                    className="text-center text-[25px] hover:rotate-180"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <div className="">
            <div onClick={resetHandler} className="w-[100px] cursor-pointer ml-4 bg-[red] font-mainFont font-bold py-2 text-white my-2">
              Cart reset
            </div>
          </div>
        </table>
      ) : (
        <div className="no my-10">
          <div className="tex">
            <p className="font-MainFont font-bold text-xl text-center">No Item select</p>
          </div>
        </div>
      )}
      <div className="">
        {memoizedGettingData.length > 0 ? (
          <div className="all md:flex md:mx-[80px]">
            <div className="item w-full md:w-[70%]"></div>
            <div className="item drop-shadow-lg rounded-md w-full md:w-[30%] flex flex-col gap-4 border-[1px] border-[#94A3B8] p-4">
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Subtotal</p>
                <p><PriceFormat className="" prize={subTotal} /></p>
              </div>
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Country</p>
                <p>Bangladesh</p>
              </div>
              <div className="flex justify-between text-xl font-semibold items-center font-MainFont">
                <p>Total</p>
                <PriceFormat className="" prize={subTotal} />
              </div>
              <div className="bg-[#F3A847] font-mainFont text-center py-2 cursor-pointer hover:bg-[#232F3E] duration-300 text-white flex justify-center gap-2 items-center">
                <p>Proceed to Checkout</p>
                <MdLogout />
              </div>
            </div>
          </div>
        ) : ""}
      </div>
    </div>
  );
}

export default Page;
