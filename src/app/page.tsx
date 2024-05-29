
import ProductList from "@/UI/ProductList";
import Slider from "@/UI/slider/Slider";

const getData = async()=>{
    const response = await fetch("https://jsonserver.reactbd.com/amazonpro")

    if(!response.ok){
        throw new Error("data faching error")
    }
    return response.json()
}
const page = async () => {
    const product = await getData()
    return (
        <div>
            <Slider />
            <div className=" md:-mt-[300px]  relative w-full ">
                <div className="content mx-8">
                  <ProductList product={product} />
                </div>
            </div>
        </div>
    );
};

export default page;