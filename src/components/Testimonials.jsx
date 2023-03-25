import { quotes } from "../assets";
import { feedBacks } from "../constants";

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
            <li key={feedBack.id} className="flex flex-col max-w-[370px] justify-between gap-10 px-10 py-12 rounded-[20px] feedback-card cursor-default">
              <img
                src={quotes}
                alt="quote-icon"
                className="w-[42px] h-[27px]"
              />
              <p className="text-white font-poppins text-lg leading-8">
                {feedBack.content}
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={feedBack.img}
                  alt="avatar"
                />
                <div className="flex flex-col ">
                  <h4 className="font-poppins font-semibold text-xl leading-8 text-white">
                    {feedBack.name}
                  </h4>
                  <p className="text-dimWhite font-poppins">
                    {feedBack.title}{" "}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
