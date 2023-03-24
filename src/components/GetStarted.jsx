import styles from "../style";
import { arrowUp } from "@/assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-0.5 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-lg leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img className="w-[23px] h-[23px]" src={arrowUp} alt="arrow" />
      </div>
      <p className="font-poppins font-medium text-lg leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
