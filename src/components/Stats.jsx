import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-between flex-wrap items-center px-5 pr-28 gap-5 sm:mb-20 mb-6">
      {stats.map((stat) => {
        return (
          <div key={stat.id} className="flex items-center gap-3">
            <h1 className="text-white  font-semibold xs:text-[40px] xs:leading-[53.16px] leading-[43.16px] text-[30px]">
              {stat.value}
            </h1>
            <p className="text-gradient  text-[20px] uppercase">{stat.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
