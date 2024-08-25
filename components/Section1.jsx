import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import Header from "./Header";
const Section1 = () => {
  return (
    <section
      className='banner relative uppercase text-white h-screen w-screen bg-[url("/images/banner1.jpg")] bg-cover px-[20px] md:px-[30px] lg:px-[60px] flex flex-col justify-end snap-center'
      id="section1"
    >
      <Header />
      <div className="flex flex-col flex-1 justify-end md:text-start absolute top-1/2 left-1/2 md:left-[60px] -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-[90%] main-headng">
        <div className=" flex flex-col gap-[10px] lg:gap-0 justify-between md:w-[524px] md:h-[130px]">
          <h3 className="uppercase text-[25px] md:text-[40px] tracking-[6px] sm:w-[238px]">
            Discover
          </h3>
          <h2 className="text-[30px] md:text-[60px] sm:text-start tracking-[8px]">
            A New World
          </h2>
        </div>
        <p className=" text-gray-300 opacity-40 text-[12px] md:text-[20px] tracking-[3px] mt-[30px] sm:w-[434px]">
          For Those who wish for more...
        </p>
      </div>
      <div className="text-center flex flex-col justify-between mt-auto flex-1">
        <div className="mt-[30px] 2xl:mt-[59px]">
          <Link to="/">
            <div className="w-[104px] h-[27px] flex jusstify-between items-center gap-[14px]">
              <div>
                <Image
                  src="/images/back.png"
                  width={21.95}
                  height={15.96}
                  alt="Picture of the author"
                />
              </div>
              <span className="text-[20px] tracking-[4px]">Back</span>
            </div>
          </Link>
        </div>
        <div className="self-center flex flex-col items-center mb-[29px]">
          <p className=" text-gray-300 opacity-40 text-[16px] xl:text-[20px] tracking-[1.5px] sm:tracking-[2.9px] mb-[31.5px] xl:mb-[61.5px] section1-p">
            Bringing The World Closer together
          </p>{" "}
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="relative w-[28px] lg:w-[42px] 2xl:w-[100px] h-[20px] lg:h-[23px] 2xl:h-[54px] cursor-pointer next-sec-arrow">
              <Image src="/images/next_sec.png" fill alt="Next section Link" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
