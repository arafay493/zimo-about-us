import React, { useRef } from "react";
import Card from "./Card";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} id="left">
      <Image
        src="/images/arrowleft.png"
        width={10}
        height={15}
        className={className}
        alt="Picture of the author"
      />
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Section3 = () => {
  const SliderRef = useRef(null);
  return (
    <section className="uppercase w-screen flex flex-col justify-evenly" id="section3">
      <div className="flex justify-center items-center gap-[20px] px-[20px] xl:px-[60px] mt-[70px] lg:mt-[100px] xl:mt-[161.5px] mb-[25px] lg:mb-[50px] xl:mb-[80px] 2xl:mb-[94px]">
        <h4 className="text-[25px] lg:text-[30px] xl:text-[40px] 2xl:text-[48px] leading-none xs:tracking-[1px] lg:tracking-[3px] xl:tracking-[6px] font-normal flex-1 whitespace-nowrap">
          Our Catagories
        </h4>
        <div className="flex h-[30px] lg:h-[41px] w-[80px] lg:w-[129.69px] justify-between items-center">
          <div
            onClick={() => SliderRef.current.slickPrev()}
            className="cursor-pointer relative w-[13px] xl:w-[20px] h-[25px] xl:h-[40px]"
          >
            <Image
              src="/images/arrowleft.png"
              fill
              className="rotate-180"
              alt="Picture of the author"
            />
          </div>
          <div
            onClick={() => SliderRef.current.slickNext()}
            className="cursor-pointer relative w-[13px] xl:w-[20px] h-[25px] xl:h-[40px]"
          >
            <Image
              src="/images/arrowright.png"
              fill
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <Slider {...settings} ref={SliderRef}>
        <div>
          <Card src="/images/cat_diamond.jpg" text="Diamond" />
        </div>
        <div>
          <Card src="/images/cat_beech.png" text="Diamond" />
        </div>
        <div className="rounded-lg">
          <Card src="/images/cat_real_estate.jpg" text="Real Estate" />
        </div>
        <div>
          <Card src="/images/cat_car.png" text="Cars" />
        </div>
        <div>
          <Card src="/images/cat_ship.png" text="Yachts" />
        </div>
        <div>
          <Card src="/images/cat_watch.png" text="Watches" />
        </div>
        <div>
          <Card src="/images/cat_tours.jpg" text="Tours" />
        </div>
      </Slider>
      <div className="p-5 md:p-10 font-light text-center">
        <h2 className="text-[25px] lg:text-[36.65px] tracking-[2px] lg:tracking-[4px] xl:tracking-[10px] 2xl:tracking-[16px] mt-[25px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[161.5px] mb-[25px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[94px] font-normal">
          One platform for all premium listings
        </h2>
        <h2 className="text-[22px] lg:text-[32px] tracking-[6px] font-normal mb-[50px] md:mb-[100px] 2xl:mb-[270px]">
          Unlimited potential
        </h2>
      </div>
    </section>
  );
};

export default Section3;
