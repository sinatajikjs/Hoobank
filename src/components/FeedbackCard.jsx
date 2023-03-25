import { quotes } from "../assets";

const FeedbackCard = ({ feedBack }) => {
  return (
    <li
      className="flex flex-col max-w-[370px] justify-between gap-10 px-10 py-12 rounded-[20px] feedback-card cursor-default"
    >
      <img src={quotes} alt="quote-icon" className="w-[42px] h-[27px]" />
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
          <p className="text-dimWhite font-poppins">{feedBack.title} </p>
        </div>
      </div>
    </li>
  );
};

export default FeedbackCard;
