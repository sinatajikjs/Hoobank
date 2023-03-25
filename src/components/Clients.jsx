import React from "react";
import { airbnb, binance, coinbase, dropbox } from "@/assets";

const Clients = () => {
  return (
    <section className="flex flex-wrap items-center justify-between my-9 md:px-10 px-16 gap-10">
      <img
        className="sm:w-48 w-[100px] object-contain"
        src={airbnb}
        alt="airbnb"
      />
      <img
        className="sm:w-48 w-[100px] object-contain"
        src={binance}
        alt="binance"
      />
      <img
        className="sm:w-48 w-[100px] object-contain"
        src={coinbase}
        alt="coinbase"
      />
      <img
        className="sm:w-48 w-[100px] object-contain"
        src={dropbox}
        alt="dropbox"
      />
    </section>
  );
};

export default Clients;
