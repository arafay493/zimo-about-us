import React from "react";
const Card = ({ src, text }) => {
  return (
    <div className="relative px-[20px] xl:px-[30px] 2xl:px-[54px] rounded-lg overflow-hidden">
      <div className="min-w-[1/4] h-[350px] 2xl:h-[420px] select-none bg-no-repeat bg-cover relative z-10 rounded-2xl overflow-hidden" style={{backgroundImage: `url(${src})` , backgroundPosition: "center"}}>
        <div className="overlay absolute h-full w-full bg-black/40 z-10"></div>
        <p className="text-white tracking-[3px] absolute bottom-5 left-1/2 -translate-x-1/2 z-30 w-full text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
