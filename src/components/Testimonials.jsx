import { feedBacks } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-20 sm:py-16 py-6 relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-start items-center">
        <h1 className="font-poppins text-white text-5xl xs:leading-[76px] leading-[66px] font-semibold w-full">
          What People are <br className="sm:block hidden" />
          saying about us
        </h1>
        <div className="w-full">
          <p className="font-poppins text-dimWhite text-lg leading-[30px] max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap sm:justify-start justify-center gap-10 relative z-[5]">
        {feedBacks.map((feedBack) => {
          return (
            <FeedbackCard feedBack={feedBack}/>
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
