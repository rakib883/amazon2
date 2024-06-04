import Image from "next/image";
import { MdSearch } from "react-icons/md";
import logog from "../image/fabby.png"
import { CiLocationOn } from "react-icons/ci";
import cart from "../image/cart.png"
import Link from "next/link";
function NewHeader() {
  return (
    <div className="bg-[#131921] py-2">
        <div className="all-content text-[white] grid items-center grid-cols-8 mx-6">
           {/* header logo area start */}
           <div className="logo-area cursor-pointer  col-span-2 flex items-center gap-4 ">
              <Link href="/" className="logo">
                 <Image src={logog} width={100} height={100} alt="logo"/>
              </Link>
              <div className="location flex items-center ">
                 <div className="icin">
                  <CiLocationOn className="text-2xl" />
                 </div>
                  <div className="text leading-[18px]"> 
                     <p>Delevering to Mumbei</p>
                     <p>Updtae loaction</p>
                  </div>
              </div>
            </div>
           {/* header logo are end */}
            <div className="search-area overflow-hidden hidden focus-within:border-[#FF9900] border-[3px] border-transparent   rounded-md col-span-4 ">
                <div className=" flex item-center rounded-md">
                   <input className="w-full outline-none px-2 text-black " placeholder="Search"/>
                   <div className="bg-[#F3A847] p-2 cursor-pointer  flex items-center px-4">
                     <MdSearch className="text-2xl"/>
                   </div>
                </div>
            </div>
            <div className="user  col-span-2">
               <div className="all flex justify-between items-center mx-4">
                  <div className="logon leading-[10px]">
                     <p className="font-mainFont text-base">Hello Sign in</p>
                      <p className="font-mainFont text-base">
                         Accounts and list
                      </p>
                  </div>
                  <div className="return leading-[15px] cursor-pointer">
                    <p className="font-mainFont text-[14px] font-bold">Returns</p>
                    <p className="text-base font-mainFont">& orders</p>
                  </div>
                  <div className="cart relative">
                      <Image src={cart} width={40} height={40} alt="cart"/>
                      <p className=" absolute bottom-[-12px] right-[-25px] font-mainFont">Cart</p>
                      <p className=" absolute text-[#B46A0C] top-0 right-[10px] font-mainFont">50</p>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default NewHeader