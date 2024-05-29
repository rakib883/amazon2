import mongoose from "mongoose"

export const connect = async()=>{
    try{
        
        mongoose.connect(process.env.MONGODB_URI !)
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("darabase connect done")
        })
        connection.on("error",(error)=>{
            console.log("something error")
        })


    }catch(error){
        console.log(error)
    }
}