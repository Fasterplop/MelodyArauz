import React from 'react'
import Button from './Button';

import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slider1, slider2, slider3, slider4} from '../assets/images';
import { Navigation, Pagination, Autoplay} from "swiper";

const Hero = () => {
    


    return (
    <div id="Home" className="relative">
    
    <div className="z-[1] absolute bottom-0 h-[30px] bg-servicesbg blur-md shadow-2xl w-full" />
    
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      // autoplay={{
      // delay: 3000,
      // disableOnInteraction: false,
      // pauseOnMouseEnter: true
      // }}
      spaceBetween={100}
      navigation={true} 
      slidesPerView={1}
      pagination={{clickable: true}}
      // sm:rounded-full
      className=" w-[90vw] h-auto " 
    >
      <SwiperSlide>
      <div className="relative w-screen">
      {/* bg-orange-400 */}
      <img src={slider1} alt="slider1" className=" justify-end  object-contain h-[600px] w-screen"/>
      <span className="absolute sm:top-[40%] top-[43%] w-screen right-[-10%] font-arimo font-bold sm:text-[50px] text-green-gradient text-[32px]">Melody Arauz </span>
      <span className="absolute top-[51%] w-screen right-[-10%] font-arimo font-semibold sm:text-[20px] text-[16px] sm:text-[#36454f] text-[#8db600]">Certified Behavioral <br className="sm:hidden block"/> Health Case Manager (CBHCM)</span>
      <Button styles="animate-bounce  hover:animate-none absolute top-[65%] left-[10%] h-[48px]" title="Book an Appointment"/>
      </div>
      
      </SwiperSlide>




      <SwiperSlide>
        <div className="relative w-screen">
        <img src={slider2} alt="slider2" className="  object-contain h-[600px] w-screen"/>
        <span className="absolute sm:top-[55%] top-[46%] font-bold font-arimo w-screen right-[-10%] text-bg-blue-gradient sm:text-[55px] text-[32px] text-[#8F00FF]">We are here <br className="sm:hidden block"/> for you</span>
        <Button styles="hover:animate-none  hover:opacity-90 animate-pulse absolute sm:top-[75%]  top-[66%] sm:left-[55%] left-[10%] h-[48px] text-[12px] sm:text-[18px]" title="Book an appointment" />
        </div>
      </SwiperSlide>
      




      <SwiperSlide>
      <div className="relative w-screen">
      <img src={slider3} alt="slider3" className="  object-contain h-[600px] w-screen"/>
      <span className="absolute  sm:top-[55%] top-[50%] font-bold font-arimo w-screen right-[-10%] text-bg-blue-gradient sm:text-[55px]  text-[32px] text-[#000080]">Advocating independence </span>
      <Button styles="hover:animate-none  hover:opacity-90 animate-pulse absolute top-[70%] sm:left-[55%] left-[10%] h-[48px] sm:text-[18px] text-[12px]" title="Book an appointment"/>
      </div>
      </SwiperSlide>





      <SwiperSlide>
      <div className="relative w-screen">
      <img src={slider4} alt="slider4" className="  object-contain h-[600px] w-screen"/>
      <span className="absolute top-[50%] w-screen right-[-10%] text-bg-blue-gradient font-arimo font-bold sm:text-[55px] text-[32px] text-orange-400">Together we can achieve it </span>
      <Button styles="hover:animate-none  hover:opacity-90 animate-pulse absolute top-[70%] h-[48px] sm:left-[55%] left-[10%] sm:text-[18px] text-[12px]" title="Book an appointment"/>
      </div>
      </SwiperSlide>
      
      {/* <SwiperSlide><img src={slider2} alt="slider2" className=" bg-green-800 object-contain h-[600px] w-screen"/></SwiperSlide>
      <SwiperSlide><img src={slider3} alt="slider3" className=" bg-blue-400 object-contain h-[600px] w-screen"/></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="slider4" className=" bg-amber-100 object-contain h-[600px] w-screen"/></SwiperSlide> */}

    </Swiper>
    </div>
    );
}

export default Hero