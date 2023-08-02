"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.css";
import ProjectSliderData from "@/WebsiteContent/ProjectSlider";

// import required modules
import { Pagination } from "swiper/modules";
import NextImage from "@/components/NextImage";

function ProjectSlider() {
  return (
    <div className="sliderWrap">
      <Swiper
        direction={"vertical"}
        watchSlidesProgress={true} 
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
            ProjectSliderData.map((data) => (
                <SwiperSlide>
          <div className="expBox relative w-full lg:p-0 xl:px-[6.875rem]">
            <div className="expBoxBg absolute inset-0 bottom-full top-full z-[-1] rounded-[10px] bg-[#f6371c] bg-[url('/images/patternImg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply before:absolute before:inset-0 before:z-[1] before:rounded-[10px] before:bg-[#f6371c] before:opacity-70 sm:rounded-[1.25rem] before:sm:rounded-[1.25rem] md:rounded-[3.125rem] before:md:rounded-[3.125rem]"></div>
            <div className="grid grid-cols-1 items-center gap-[1.875rem] lg:grid-cols-1 xl:grid-cols-2">
              <div className="gridItem xl:order-1">
                <div className="expImg relative max-h-[14rem] overflow-hidden rounded-[10px] opacity-0 sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem]">
                  <NextImage
                    className="w-full"
                    src={data.imageurl}
                    alt="Black Dot"
                    width={570}
                    height={555}
                  />
                </div>
              </div>
              <div className="gridItem">
                <div className="expCap relative w-full pl-0 xl:pl-[7.5rem]">
                  <i className="before:bg-[#101430] font-Poppins absolute left-0 top-5 z-[-1] inline-flex h-[3.125rem] w-[3.125rem] items-center justify-center text-[1.875rem] font-extrabold not-italic text-white before:absolute before:inset-0 before:z-[-1] before:rotate-[45deg] before:rounded-[.9375rem] md:h-[5rem] md:w-[5rem] md:text-[2.75rem] lg:h-[7.5rem] lg:w-[7.5rem] lg:text-[3.75rem]">
                    {data.id}
                  </i>
                  <span className="font-Poppins text-desc text-[1rem] font-light md:text-[1.125rem] text-white">
                    {data.year}
                  </span>
                  <h2 className="font-Poppins mt-[5px] text-[1.75rem] font-bold text-white lg:text-[1.875rem] xl:text-[2.25rem]">
                    {data.title}
                  </h2>
                  <h4 className="font-NunitoSans mt-2 text-[1.125rem] font-semibold text-[#f6371c] md:text-[1.25rem] lg:text-[1.375rem]">
                    {data.subtitle}
                  </h4>
                  <p className="font-NunitoSans text-desc text-white mt-4 max-w-full text-[1rem] font-normal md:max-w-[95%] md:text-[1.125rem]">
                    {data.des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
