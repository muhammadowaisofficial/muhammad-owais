import NextImage from "@/components/NextImage";
import React from "react";
import SidesocialMedia from "../SidesocialMedia";
// import SidesocialMedia from '../SidesocialMedia'

function Banner() {
  return (
    <div className="featuredAreaWrap md:text-left text-center bg-[#070918] z-[1] flex items-center bgGrident1 bg-blend-hard-light relative min-h-screen xl:rounded-br-[20rem] lg:rounded-br-[18rem] md:rounded-br-[15rem] sm:rounded-br-[10rem] rounded-br-0 w-screen md:py-[6.25rem] py-20">
        <div className="shaps absolute inset-0">
        <NextImage
          className="floatAnim animDelay1 absolute left-[10%] top-[10%]"
          src={"/images/blackdot1.png"}
          alt="Black Dot"
          width={38}
          height={52}
        />
        <NextImage
          className="floatAnim animDelay2 absolute bottom-[20%] right-[10%]"
          src={"/images/bluedot.png"}
          alt="Blue Dot"
          width={38}
          height={38}
        />
        <NextImage
          className="floatAnim animDelay3 absolute bottom-[50%] right-[50%]"
          src={"/images/bluedot.png"}
          alt="Blue Dot"
          width={38}
          height={38}
        />
        <NextImage
          className="floatAnim animDelay4 absolute bottom-[40%] right-[15%]"
          src={"/images/blackdot2.png"}
          alt="Black Dot"
          width={38}
          height={48}
        />
        <NextImage
          className="floatAnim animDelay5 absolute right-[10%] top-[10%]"
          src={"/images/blackdot1.png"}
          alt="Black Dot"
          width={38}
          height={52}
        />
        <NextImage
          className="absolute floatAnim right-[45%] top-[10%] animDelay6"
          src={"/images/whitedot.png"}
          alt="White Dot"
          width={38}
          height={38}
        />
      </div>
        <span className="bg-[#f6371c] absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>
        <SidesocialMedia />
        <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
          <div className="featuredAreaInner relative z-[1] w-full">
            <div className="grid gap-[1.875rem] 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 items-center">
              <div className="2xl:order-1 xl:order-1 lg:order-1 md:order-1">
                <div className="featuredImgWrap text-center w-full">
                  <div className="featuredImgInner relative inline-block w-4/5 sm:w-full md:w-full lg:w-[26rem] xl:w-[35rem]">
                    <span className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-white rounded-full right-[-2.5rem] top-[-2.5rem] md:right-[-3.5rem] md:top-[-3.5rem] lg:right-[-4rem] lg:top-[-4rem] xl:right-[-6.25rem] xl:top-[-6.25rem] z-[1]"></span>
                    <span className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-[#0d112a] rounded-full left-[-2.5rem] bottom-[-2.5rem] md:right-[-3.5rem] md:bottom-[-3.5rem] lg:left-[-4rem] lg:bottom-[-4rem] xl:left-[-6.25rem] xl:bottom-[-6.25rem] z-[1]"></span>
                    <div className="featuredImg relative rounded-full">
                    <NextImage
                    className="relative z-[1] max-w-full rounded-full"
                    src={"/images/profile.jpg"}
                    alt="Black Dot"
                    width={560}
                    height={560}
                  />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="featuredCap relative text-left w-full mt-10 md:mt-0">
                  <span className="bg-[#f6371c] opacity-[.07] w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] absolute rounded-full z-[-1] top-[-2.5rem] md:top-[-5rem]"></span>
                  <h3 className="font-normal text-[1.5rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] xl:text-[2.5rem] fontCaveat text-white uppercase leading-none">Hello, I Am</h3>
                  <h2 className="font-bold text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-Poppins text-white uppercase">Muhammad <span className="font-normal text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-[#f6371c] font-Poppins uppercase">Owais</span>
                  </h2>
                  <h5 className="md:justify-start justify-center font-bold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-Poppins text-white uppercase flex items-center gap-2.5 tracking-[1px]">
                    <span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-[#f6371c] h-[1px]"></span>Full Stack Developer
                  </h5>
                  <p className="text-[16px] text-white w-full md:w-full lg:w-full xl:w-3/4 mt-6">Hi, I am a full-stack developer 🧑‍💻 with solid experience in creating user-friendly, upstanding, secure, and fast websites for businesses around the world. Whether you need a full-fledged application with all the custom features or a simple website to showcase your products and services, I am here to help.</p>
                  <div className="flex items-center gap-8 mt-[1.875rem]">
                    <a className="text-[#f6371c] uppercase md:text-[1.125rem] text-[1rem] flex gap-5 items-center hover:text-white" title="Hire Me" target="_blank" href="https://www.linkedin.com/in/mohammadowaisofficial">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="bg-[#f6371c] text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span className="font-bold font-Poppins underline underline-offset-8">Hire Me</span>
                    </a>
                    <a className="bg-white text-[#f6371c] text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-[#f6371c] hover:text-white text-center inline-block" title="Download CV" href="/">Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Banner;
