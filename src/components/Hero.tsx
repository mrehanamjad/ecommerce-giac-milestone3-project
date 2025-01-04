import React from "react";
import Container from "./Container";
import Categories, { CategoryDropdown } from "./Categories";
import Image from "next/image";

function Hero() {
  return (
    <Container>
      <div className="w-full flex max-lg:flex-col text-text">
        <div className="pt-8 pb-2 px-2 border-r-[0.5px] border-line max-lg:hidden">
          <Categories />
        </div>
        <div className="w-full lg:hidden">
           <CategoryDropdown />
         </div>
        <div className="flex-1 w-full pt-8 pb-2 px-2 lg:pl-10">
          <div className="bg-text2 md:h-[21.5rem] grid md:grid-cols-2 grid-cols-1 py-4 px-8">
            <div className="h-full md:pl-5 lg:pl-14  flex flex-col justify-center  gap-1 md:gap-4 items-center md:items-start">
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={"/1200px-Apple_gray_logo 1.svg"}
                  alt="hero-image-iphone"
                  width={40}
                  height={49}
                  className=""
                />
                <span className="text-center text-secondary1 text-Title-16PX-Regular">
                  iPhone 14 Series
                </span>
              </div>
              <h2 className="text-Heading-36PX-SemiBold md:text-Heading-48PX-SemiBold text-text max-md:text-center">
                Up to 10% off Voucher
              </h2>
              <button className="text-Title-16PX-Mediam flex gap-2 items-center">
                <span className="py-1 border-b-line border-b">Shop Now </span>
                <span>
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 8H18M18 8L11 1M18 8L11 15"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="h-[18rem] bg-top mt-2" style={{backgroundImage:'url("/hero_endframe__cvklg0xk3w6e_large 2.png")'}}>
            </div>
            <div className="md:col-span-2  h-fit text-line flex justify-center items-center gap-2">
              <span className="p-1 rounded-full bg-line border "></span>
              <span className="p-1 rounded-full bg-line border "></span>
              <span className="p-1 rounded-full bg-red-500 border "></span>
              <span className="p-1 rounded-full bg-line border "></span>
              <span className="p-1 rounded-full bg-line border "></span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
