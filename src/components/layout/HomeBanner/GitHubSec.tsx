import BrandImage from "@/WebsiteContent/Brand";
import NextImage from "@/components/NextImage";
import React from "react";

function GitHubSec() {
  return (
    <>
    <div className="postsWrap relative w-full py-[5rem] sm:py-[6rem] md:py-[7.5rem]">
      <div className="fixedBg bg-[url('/images/patternImg3.jpg')] bg-left-top bg-no-repeat opacity-20"></div>
      <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
        <div className="secTitleWrap mb-[2.1875rem] flex w-full justify-center text-center">
          <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
            <h2 className="text-accent2 font-Poppins relative text-[1.875rem] font-bold md:text-[3.125rem]">
              <i className="bg-shapBg absolute left-1/2 top-[-12%] z-[-1] ml-[-1.75rem] h-[3.5rem] w-[3.5rem] rounded-[10px] md:top-[-15%] md:ml-[-2.8125rem] md:h-[5.625rem] md:w-[5.625rem] md:rounded-[1.25rem]"></i>
              Top{" "}
              <span className="font-Caveat relative text-[1.875rem] font-bold text-accent md:text-[3.125rem]">
              Repositories
              </span>
            </h2>
            <p className="text-desc2 mt-1 text-[1rem] sm:text-[1.225rem] md:text-[1.25rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="partWrap md:mt-[-1.875rem] pb-[5rem] sm:pb-[5.5rem] md:pb-[6.25rem] relative w-full">
    <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
      <div className="secTitleSimpleWrap gap-3 flex justify-center w-full mb-[1.875rem]">
        <h3 className="text-accent2 font-Poppins font-semibold text-[1.375rem]">Companies I'm Working With</h3>
      </div>
      <div className="partList grid gap-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 place-items-center place-content-center w-full">
      {
            BrandImage.map((data) => (
                <div className="partBox group overflow-hidden text-center relative w-100">
          <a className="inline-block overflow-hidden relative" href="#" title="Partner">
            <NextImage
                      className="group-hover:-translate-y-full group-hover:opacity-0 transition-all ease-in-out duration-200"
                      src={data.garyimageurl}
                      alt="Gray Logo"
                      width={175}
                      height={38}
                    />
                    <NextImage
                      className="translate-y-full opacity-0 absolute top-0 left-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
                      src={data.colorimageurl}
                      alt="Color Logo"
                      width={175}
                      height={38}
                    />
            </a>
        </div>
            ))
        }
      </div>
    </div>
  </div>
  </>
  );
}

export default GitHubSec;
