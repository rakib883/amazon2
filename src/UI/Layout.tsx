"use client"
import { SessionProvider } from 'next-auth/react';
import React, { useEffect, useState } from 'react';


import SubHeader from './Header/SubHeader';
import Foter from './Foter';
import { usePathname } from "next/navigation";
import { Provider } from 'react-redux';
import { store } from '@/Redux/store';
import Header from './Header/Header';



const Layout = ({children}:any) => {
    // login page render start
    const pathname = usePathname()
    const [loginSystem,setLoginSystem] = useState(true)
      // login page render end

      useEffect(()=>{

          if(pathname === "/login" || pathname === "/registration"){
            setLoginSystem(false)
          }else{
            setLoginSystem(true)
          }

      },[pathname,loginSystem])
    return (
          <Provider store={store}>
            <SessionProvider>
                 { 
                 loginSystem &&
                    <>
                      <Header/>
                      <SubHeader/>
                    </>
                 }
                 {children}
                 { 
                 loginSystem &&
                    <>
                     <Foter/>
                    </>
                 }
                 
             </SessionProvider>
            </Provider>
    );
};

export default Layout;