import Image from "next/image";
import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";

const getLocation = async (setObj) => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    const IP = response?.data?.ip;
    const location = await axios.get(`http://ip-api.com/json/${IP}`);
    setObj(location.data);
  } catch (error) {
    console.log("Error" + error);
  }
};

const Header = () => {
  const [obj, setObj] = useState({});
  useEffect(() => {
    getLocation(setObj);
  }, []);
  return (
    <header className="relative flex justify-between items-center pt-[20px] lg:pt-[30px]  2xl:pt-[68px] header">
      <div className="flex items-baseline gap-[10px] 2xl:gap-[39px]">
        <div className="hidden sm:block relative w-[45px] 2xl:w-[65.96px] h-[35px] 2xl:h-[50px]">
          <Image src="/images/l1.png" fill alt="" />
        </div>
        <div className="relative w-[120px] 2xl:w-[184.9px] h-[35px] 2xl:h-[50px]">
          <Image src="/images/l2.png" fill alt="" />
        </div>
        <div className="text-[12px] 2xl:text-[14.66px] tracking-[1.5px]">
          About
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-[150px] 2xl:w-[204.38px] h-[35px] 2xl:h-[50px] hidden lg:block">
        <Image src="/images/l3.png" fill alt="" />
      </div>
      <div
        className="flex flex-col-reverse md:flex-row items-center
       justify-between gap-3 w-[380px] 2xl:w-[570.59px]"
      >
        <div className="flex items-center gap-[8px] md:gap-[13px] absolute top-[130px] md:static self-end 2xl:self-auto">
          <div className="text-[17px]">
            <div className="flex gap-[13px]">
              <Clock format={"HH:mm"} ticking={true} /> <span>{obj?.city}</span>{" "}
              <span>{obj?.country}</span>
            </div>
            <div className="text-[#BE9F56] text-[14px] text-end">
              <Clock format={"dddd, Do MMMM YYYY"} ticking={true} />
            </div>
          </div>
          <div className="text-[40px] leading-[20px]">
            <ReactCountryFlag
              countryCode={obj?.countryCode}
              svg
              className="emojiFlag w-[37.31px] h-[25px]"
              title={obj.countryCode}
            />
          </div>
        </div>

        <div className="flex-1 flex gap-[20px] md:justify-evenly self-end md:self-auto">
          <div>
            <Image src="/images/cart.png" width={20.89} height={25} alt="" />
          </div>
          <div>
            <Image src="/images/user.png" width={20.89} height={25} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
