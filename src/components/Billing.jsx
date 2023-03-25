import React from "react";
import { apple, bill, google } from "@/assets";

const Billing = () => {
  return (
    <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6 gap-10">
      <div className="flex-1 relative">
        <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-center items-start ">
        <h1 className="font-poppins text-white text-5xl xs:leading-[76px] leading-[66px] font-semibold w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h1>
        <p className="font-poppins text-dimWhite text-lg leading-[30px] max-w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-5 mt-5">
          <img src={apple} alt="app-store" />
          <img src={google} alt="google-play" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
