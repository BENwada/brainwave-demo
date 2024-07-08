import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
          key={item.id}
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="">{item.description}</p>

          <div className="">
            {item.price && (
              <>
                <div className="">$</div>
                <div className="">{item.price}</div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:conntact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul className="">
            {item.features.map((feature, index) => (
              <li className="" key={index}>
                <img src={check} alt="Check" width={24} height={24} />
                <p className="">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
