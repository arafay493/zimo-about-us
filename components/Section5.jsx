import React from "react";
import Image from "next/image";

const Section5 = () => {
  return (
    <section className="flex items-center h-screen w-screen text-white uppercase snap-center">
      <div className='bg-[url("/images/banner2mobile.jpg")] 2xl:bg-[url("/images/banner2.png")] bg-cover bg-center bg-no-repeat h-full w-full flex flex-col-reverse lg:flex-row justify-between items-center px-[20px] md:px-[60px]'>
        <div className="flex justify-center items-end xl:mb-0 w-[240px] xl:w-[350px] 2xl:w-[547.74px] h-[50px] xl:h-[80px] 2xl:h-[134px] mb-[20px] relative">
          <Image
            src="/images/A.png"
            fill
            alt="Picture of the author"
            className="align-center"
          />
        </div>
        <div className="flex-1 flex flex-col justify-start items-end xl:h-[71%] mt-10 xl:mt-0 lg:mr-[34px]">
          <div className="w-[380px] 2xl:w-[605px] h-[202px] mt-5 uppercase px-[20px] sm:p-0">
            <h4 className="text-[16px] md:text-[20px] 2xl:text-[40px] tracking-[6px] flex-[2] gap-5 ">
              Personalized for you
            </h4>
            <p className="opacity-60 text-[12px] md:text-[15px] tracking-[3px] mt-4">
              Delivering Thousand of personlize alerts everyday our users can
              first in line when that opportunity of a lifetime is here.
            </p>
            <p></p>
          </div>
          <div className="w-[250px] sm:mt-[35px] md:mt-[100px] text-2xl relative md:-right-[130px] lg:right-0">
            <div className="flex xl:justify-end items-center gap-4">
              <p className="uppercase text-lg tracking-[2px]">
                {" "}
                Create user id
              </p>
              <div>
                <Image
                  src="/images/right.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
