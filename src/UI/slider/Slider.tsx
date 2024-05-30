"use client";
import React from 'react';
import slider1 from "../../image/1.jpg"
import slider2 from "../../image/2.jpg"
import slider3 from "../../image/3.jpg"

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const Slider = () => {
    return (
        <div className=" relative">
             <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} >
                <div>
                    <Image src={slider1} alt="slider" height={200} width={300} />
                   
                </div>
                <div>
                <Image src={slider2} alt="slider" height={200} width={300}  />
                  
                </div>
                <div>
                <Image src={slider3} alt="slider" height={200} width={300}  />
                </div>
            </Carousel>
            <div className=" absolute bottom-4 pb-[200px] w-full bg-gradient-to-t from-gray-200 to-transparent">
            </div>
        </div>
    );
};

export default Slider;
