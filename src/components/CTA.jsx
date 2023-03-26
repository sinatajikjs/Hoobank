import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex sm:flex-row flex-col gap-10 items-center sm:my-16 my-6 sm:py-12 py-4 sm:px-16 px-6 bg-black-gradient-2 rounded-[20px]">
      <div className="flex flex-1 flex-col gap-5 ">
        <h1 className=" text-white text-5xl xs:leading-[76px] leading-[66px] font-semibold w-full">
          Let’s try our service now!
        </h1>
        <p className="max-w-[470px]  text-dimWhite text-lg leading-[30px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
