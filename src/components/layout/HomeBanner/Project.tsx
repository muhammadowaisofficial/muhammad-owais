import React from "react";
import ProjectSlider from "./ProjectSlider";

function Project() {
  return (
    <div className="workExpWrap xl:py-[7.5rem relative w-full py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem]">
      <span className="absolute bottom-[-.75rem] right-0 h-6 w-1/2 bg-[#f6371c]"></span>
      <div
        className="fixedBg before:bg-[#070918] bg-[#070918] gradBg1 rounded-tl-0 overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-color-dodge before:absolute before:inset-0 before:z-[1] before:opacity-90 sm:rounded-tl-[10rem] md:rounded-tl-[15rem] lg:rounded-tl-[18rem] xl:rounded-tl-[20rem] bg-[url('/images/secBg.jpg')]"
      ></div>
      <div className="container mx-auto sm:container md:container lg:container xl:max-w-[86.875rem]">
        <div className="secTitleWrap mb-[2.1875rem] flex w-full justify-center text-center">
          <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
            <h2 className="font-Poppins relative text-[1.875rem] font-bold text-white md:text-[3.125rem]">
              <i className="bg-[#252a4f] absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              My Work{" "}
              <span className="font-Caveat relative text-[1.875rem] font-bold text-white md:text-[3.125rem]">
                Experience
              </span>
            </h2>
            <p className="text-desc text-white mt-1 text-[1rem] sm:text-[1.225rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <ProjectSlider/>
      </div>
    </div>
  );
}

export default Project;
