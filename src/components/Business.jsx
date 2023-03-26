import { features } from "../constants";
import styles from "../style";
import Button from "./Button";
styles;

const Business = () => {
  return (
    <section
      id="features"
      className={`sm:py-16 py-6 flex flex-col md:flex-row justify-center items-start gap-16`}
    >
      <div className="flex-1 w-full flex flex-col items-start">
        <h1 className=" text-white text-5xl xs:leading-[76px] leading-[66px] font-semibold">
          You do the business,
          <br />
          we’ll handle the money.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="mt-10" />
      </div>
      <ul className="flex-1 flex flex-col gap-6">
        {features.map((li) => {
          return (
            <li
              key={li.id}
              className="flex items-center gap-7 p-6 feature-card rounded-[20px] cursor-default"
            >
              <img src={li.icon} alt={li.title} />
              <div>
                <h2 className=" text-lg font-semibold text-white">
                  {li.title}
                </h2>

                <p className=" text-dimWhite ">{li.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Business;
