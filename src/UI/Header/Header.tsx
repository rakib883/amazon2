
import { FaSearch } from "react-icons/fa";
import logo from "../../image/fabby.png";
import cartImage from "../../image/cart.png";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


function Header() {
  interface Amazone {
    state: string;
  }

  // cart area data add section start
  const getCart = useSelector((state: any) => state.addCart.addCart);
  // cart area data add section end
  const getUSer = useSelector((state: any) => state?.addCart.userInfo);

  // Log user info if available
  
 

  return (
    <div className="bg-[#131921] py-4 sticky top-0 z-50">
      <div className="all-content mx-2 flex items-center justify-between">
        {/* logo area start */}
        <div className="flex w-[20%] justify-between items-center">
          <Link href="/" className="">
            <Image className="" src={logo} width={150} height={150} alt="logo" />
          </Link>
          <div className="location flex items-center gap-2 w-full">
            <div className="icon"></div>
            <div className="paragraph text-white leading-[15px]">
              <p className="text-[12px]">Delivering to Mumbai</p>
              <p className="text-[16px]">Update location</p>
            </div>
          </div>
        </div>
        {/* logo area end */}
        
        {/* search area start */}
        <div className="search-area w-[45%] border-transparent border-2 focus-within:border-[#ffa41d] rounded-lg">
          <div className="flex w-full items-center bg-white rounded-md">
            <input className="w-full px-1 outline-none" type="text" placeholder="Search amazon data" />
            <div className="search cursor-pointer bg-amber-500 p-[12px] rounded-r-md">
              <FaSearch />
            </div>
          </div>
        </div>
        {/* search area end */}
        
        {/* user area start */}
        <div className="user-area w-[30%] flex items-center justify-between">
          <div className="text-white">
            <p>IN</p>
          </div>
          {
            getUSer ? (
              <div className="main text-white leading-[15px] flex">
                  <div className="profile">
                    {/* <Image src={getUSer?.image ? getUSer?.image!  : "https://i.ibb.co/mJRkRRV/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" } height={100} width={100} alt="user"/> */}
                  </div>
                  <div className="profile-text">
                     <p className="text-[12px]">{getUSer?.name}</p>
                     <p className="text-[12px]">{getUSer?.email}</p>
                     <p>Hello</p>
                  </div>
              </div>
            ) : (
              <Link href="/registration" className="text-white leading-[15px] cursor-pointer">
                <p className="text-[12px]">Hello Sign In</p>
                <p className="text-[14px]">Accounts and List</p>
              </Link>
            )
          }
          <div className="profile text-white cursor-pointer">
            <div className="text-white leading-[15px]">
              <p className="text-[12px]">Return</p>
              <p className="text-[14px]">& Order</p>
            </div>
          </div>
          <div className="cart-container cursor-pointer flex items-center">
            <Link href="/cart" className="cart relative">
              <Image src={cartImage} width={40} height={40} alt="cart" />
              <p className="text-[red] absolute top-[-5px] right-[50%] translate-x-2">{getCart.length}</p>
            </Link>
            <p className="text-[white] mt-4">Cart</p>
          </div>
        </div>
        {/* user area end */}
      </div>
    </div>
  );
}

export default Header;
