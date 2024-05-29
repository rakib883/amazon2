import { connect } from "@/dbConfigure/dbConfig";
import User from "@/models/userModels";
import { ToastContainer, toast } from 'react-toastify';
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (response:NextRequest)=>{
    connect()
     try{
        const bodyReq = await response.json()
         
        // user email checking area start
        const { userGmail,userPassword} = await bodyReq;
        const user = await User.findOne({userGmail});
        console.log(user)
        if(!user){
            return NextResponse.json({
               error:"Invlid gmail"
            },{status:500})
        }
      // user email checking area end
        
        return NextResponse.json({
            bodyReq,
            message:"done"
        })
        
     }catch(error){
        console.log(error)
     }
}