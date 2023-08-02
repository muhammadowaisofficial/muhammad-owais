import React from "react";

function TestimonialSec() {
  return (
    <div className="testiWrap sm:mt[-12rem] relative -mt-24 w-full pb-[4.5rem] pt-[10rem] sm:pb-[5.5rem] md:mt-[-15rem] md:pb-[6.5rem] md:pt-[22rem] lg:mt-[-17.625rem] lg:pb-[8.75rem] lg:pt-[26rem]">
      <span className="absolute bottom-[-.75rem] right-0 h-6 w-1/2 bg-[#f6371c]"></span>
      <div className="fixedBg before:bg-[#070918] bg-[#070918] gradBg1 rounded-tl-0 overflow-hidden bg-[url('/images/secBg4.jpg')] bg-center bg-no-repeat bg-blend-color-dodge before:absolute before:inset-0 before:z-[1] before:opacity-90 sm:rounded-tl-[10rem] md:rounded-tl-[15rem] lg:rounded-tl-[18rem] xl:rounded-tl-[20rem]"></div>
      <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
        <div className="secTitleWrap mb-[2.1875rem] flex w-full justify-center text-center">
          <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
            <h2 className="font-Poppins relative text-[1.875rem] font-bold text-white md:text-[3.125rem]">
              <i className="bg-shapBgDark absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              Users{" "}
              <span className="font-Caveat relative text-[1.875rem] font-bold text-white md:text-[3.125rem]">
                Feedback
              </span>
            </h2>
            <p className="text-desc text-white mt-1 text-[1rem] sm:text-[1.225rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSec;
