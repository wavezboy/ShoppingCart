import { Link } from "react-router-dom";
import { obj, useAppContext } from "../context/context";
import FormContainer from "./FormContainer";

export default function Step4() {
  const { addsOn, plan, duration } = useAppContext();
  // +$12/mo
  const regex = /\d/g;

  const price = Number(plan?.price.match(regex)?.join(""));

  const totaPrice = () => {
    let total = price;

    addsOn.forEach((adds) => {
      const price = Number(adds.price.match(regex)?.join(""));

      total += price;
    });

    return total;
  };

  return (
    <div>
      <FormContainer>
        <div className="p-7">
          <div>
            <p className="text-[36px] capitalize mb-2 font-bold text-blue-950">
              finishing up
            </p>
            <h2 className="text-gray-400 text-[18px] mb-10">
              Double-check everything looks OK before confirming.
            </h2>
          </div>
          <div className=" w-[480px] mb-6 p-3 bg-gray-100">
            <div className="flex justify-between mb-6 ">
              <div>
                <p className="font-bold text-blue-950">
                  {plan?.name} ({duration})
                </p>
                <Link to="/step2" className="underline hover:text-blue-500">
                  change
                </Link>
              </div>
              <p className="font-bold text-blue-950">{plan?.price}</p>
            </div>
            <span className="h-[1px] mb-4 w-[400px] block  mx-auto bg-gray-300"></span>
            {addsOn.map((adds, i) => (
              <div key={i} className="flex mb-4 justify-between ">
                <p className="text-gray-400">{adds.name}</p>
                <p className="text-black-300">{adds.price}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-[240px] ml-4">
            <div>
              <p>
                {duration === "Yearly"
                  ? "Total (per year)"
                  : "Total (per month)"}
              </p>
            </div>
            <p className="text-purple-700 text-[20px] font-bold">{`+$${totaPrice()}/mo`}</p>
          </div>
          <div className="flex items-center mt-16 gap-72">
            <Link to="/step3">
              <p
                className="text-blue-950 cursor-pointer
            "
              >
                Go Back
              </p>
            </Link>
            <div>
              <Link to="/thankyou">
                <button
                  type="submit"
                  className="h-[44px] text-[18px] hover:bg-blue-500 cursor-pointer text-white font-bold flex items-center  justify-center w-[130px] bg-blue-800 rounded-[8px]"
                >
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
