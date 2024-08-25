import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-[40px] w-screen px-[20px] md:px-[60px] snap-center">
      <div className="flex flex-col justify-between gap-3 md:gap-5 md:h-full z-10 2xl:w-[565.7px] ">
        <div className="relative w-[270px] md:w-[450px] 2xl:w-[565.7px] h-[80px] sm:h-[100px] 2xl:h-[152.98px] m-auto md:m-0">
          <Image src="/images/ZimA.png" fill alt="" />
        </div>
        <div className="text-center md:text-start uppercase w-[400px] xl:w-[543px] mt-[10px] 2xl:mt-[40px]">
          <div className="flex flex-col justify-between h-[130px]">
            <h3 className="text-[25px] lg:text-[30px]  xl:text-[40px] tracking-[3px]">
              Our Source
            </h3>
            <h2 className="text-[33px] sm:text-[40px] xl:text-[63px] my-3 tracking-[6px]">
              Entry tickets
            </h2>
          </div>
          <p className=" text-[20px] tracking-widest leading-6 xl:mt-[50px]">
            For All Premium Listings
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-0 2xl:mr-[46px] ">
        <div className="w-[315px] sm:w-[300px] md:w-[400px] lg:w-[500px] 2xl:w-[600px] 3xl:w-[1083px] h-[418px] 2xl:h-[618px] 3xl:h-[718px] relative overflow-hidden rounded-[30px]">
          <div className="overlay absolute h-full w-full bg-black/40 z-10"></div>
          <Image src="/images/house.jpg" fill alt="" />
        </div>
        <p className="2xl:w-[1083px] uppercase text-center 2xl:text-[23px] tracking-[6px] my-[40px] 3xl:my-[70px]">
          let your dreams find you
        </p>
      </div>
    </section>
  );
};

export default Section4;
