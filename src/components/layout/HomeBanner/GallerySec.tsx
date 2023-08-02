import Gallery from "@/components/Filters/Gallery";
import React from "react";

function GallerySec() {
  return (
    <div className="aboutUsWrap relative w-full py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem]">
      <div className="fixedBg bg-[url('/images/about-bg.jpg')] bg-left-top bg-no-repeat opacity-20"></div>
      <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
        <div className="secTitleWrap mb-[2.1875rem] flex w-full justify-center text-center">
          <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
            <h2 className="text-[#f6371c]2 font-Poppins relative text-[1.875rem] font-bold md:text-[3.125rem]">
              <i className="absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] bg-[#eeeffa] text-black dark:bg-[#000] dark:text-white md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              My Amazing{" "}
              <span className="fontCaveat relative text-[1.875rem] font-bold text-[#f6371c] md:text-[3.125rem]">
                Works
              </span>
            </h2>
            <p className="text-desc2 mt-1 text-[1rem] sm:text-[1.225rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>

        <Gallery/>
        
      </div>
    </div>
  );
}

export default GallerySec;
