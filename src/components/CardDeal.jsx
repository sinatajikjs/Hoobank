import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col gap-10 sm:py-16 py-6">
      <div className="flex-1 flex flex-col justify-center items-start gap-5">
        <h1 className=" text-white text-5xl xs:leading-[76px] leading-[66px] font-semibold w-full">
          Find a better card deal
          <br />
          in few easy steps.
        </h1>
        <p className=" text-dimWhite text-lg leading-[30px] max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="mt-5" />
      </div>
      <img className="flex-1 w-full" src={card} alt="card" />
    </section>
  );
};

export default CardDeal;
