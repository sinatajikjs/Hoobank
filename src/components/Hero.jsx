import styles from "../style";
import { discount, robot } from "@/assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`grow ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img className="w-8 h-8" src={discount} alt="discount" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-white font-poppins ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] font-semibold ">
            {" "}
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> Payment Method.
          </h1>
          <div className="flex  md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
