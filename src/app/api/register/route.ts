import { connect } from "@/dbConfigure/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
export const POST = async(response:NextRequest)=>{
    connect()
     try{
         
         const bodyReq =await response.json()
         const {useName,userGmail,userPassword} = await bodyReq



         
        //  email valadetion start
         const emailVladetion = ()=>{
            return String(userGmail).toLocaleLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
         }

         if(!emailVladetion()){
            return NextResponse.json({
                error:"gmail not  valid"
            },{status:500})
         }
        // email valadetion end
        
        const user = await User.findOne({userGmail})
        if(user){
            return NextResponse.json({
                error:"email allredy exsit"
            },{status:500})
        }


        // password encprit area

          const salt = await bcryptjs.genSalt(10)
          const encryptedPassword = await bcryptjs.hash(userPassword,salt)

         const newUser = new User({
            useName,
            userGmail,
            userPassword:encryptedPassword
         })

         const saveUser = newUser.save()

         return NextResponse.json({
            message:"data send success fully",
            sucess:true,
            saveUser
         })

     }catch(error){
        console.log(error)
     }
}