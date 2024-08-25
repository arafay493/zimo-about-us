import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const Section2 = () => {
  return (
    <section
      className="uppercase h-auto md:h-screen w-screen flex flex-col gap-5 snap-center leading-none"
      id="section2"
    >
      <p className="text-center md:text-[20px] tracking-[2px] 2xl:tracking-[3px] mt-[30px] xl:mt-[50px]  2xl:mt-[70px] mb-[50px] 2xl:mb-[100.8px] px-[20px] md:px-[60px] 2xl:px-0 leading-[30px] 2xl:leading-none">
        A Real State and property platform that is chnaging the world
      </p>
      <div className="flex flex-col md:flex-row flex-1 px-[20px] md:px-[60px] gap-[50px] md:gap-0">
        <div className="flex flex-col gap-10 justify-around 2xl:items-start text-center md:text-start">
          <div className="h-auto md:h-[100px] xl:h-[140px] 2xl:h-[200.03px] flex flex-col justify-between gap-[10px] md:gap-0">
            <h4 className="xl:text-[20px] 2xl:text-[29.4px] tracking-[3.5px] xl:tracking-[7px]">
              A Revolutionary platform
            </h4>
            <h3 className="text-[30px] xl:text-[45px] 2xl:text-[60px] tracking-[2.4px]">
              Enteries - Sellers
            </h3>
            <h2 className="text-[30px] xl:text-[55px] 2xl:text-[74.03px] tracking-[14px]">
              Worldwide
            </h2>
          </div>
          <div className="flex flex-col justify-end xl:w-[720.22px] 2xl:w-auto text-center md:text-start">
            <h4 className="text-[24px] 2xl:text-[40px] leading-[3rem] tracking-[5px] 2xl:tracking-[6px] md:mb-[15px] 2xl:mb-[49px]">
              The best of the best
            </h4>
            <p className="text-[12px] xl:text-[16px] 2xl:text-[20px] w-[360px] lg:w-[600px] xl:w-[700px] 2xl:w-[995px] tracking-[2.91px] leading-[20px] xl:leading-[30px] 2xl:leading-[40px] m-auto md:m-0">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
              MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
              FROM ACROSS THE WORLD.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center xl:justify-end items-center  mb-[20px]">
          <div className="">
            <div className="relative mb-[20px] xl:mb-[30.3px] 2xl:mb-[60.3px] w-[280px] xl:w-[400px] 2xl:w-[589.6px] h-[70px] xl:h-[100px] m-auto 2xl:h-[144.24px]">
              <Image
                src="/images/sec_image.png"
                fill
                alt="Picture of the author"
                className="m-auto"
              />
            </div>
            <p className="w-[300px] xl:w-[468px] 2xl:w-[589.6px] m-auto text-center text-[12px] 2xl:text-[20px] tracking-[2.91px] leading-[25px] xl:leading-[35px] 2xl:leading-[50px] mb-[20px] 2xl:mb-0">
              CONNECTING USERS FROM ACROSS THE GLOBE TO FACILITATE LIFE'S MOST
              IMPORTANT PERSONAL TRANSACTIONS
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="section3" spy={true} smooth={true} offset={50} duration={500}>
          <div className="relative w-[28px] lg:w-[42px] 2xl:w-[100px] h-[20px] lg:h-[23px] 2xl:h-[54px] cursor-pointer next-sec-arrow">
            <Image
              src="/images/next_sec_w.png"
              fill
              alt="Picture of the author"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
