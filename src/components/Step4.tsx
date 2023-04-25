import { useAppContext } from "../context/context";
import FormContainer from "./FormContainer";

export default function Step4() {
  const { addsOn } = useAppContext();

  return (
    <div>
      <FormContainer>
        <div className="p-">
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
                <p className="font-bold text-blue-950">Arcade (Monthly)</p>
                <a href="#" className="underline hover:text-blue-500">
                  change
                </a>
              </div>
              <p className="font-bold text-blue-950">$9/mo</p>
            </div>
            <span className="h-[1px] mb-4 w-[400px] block  mx-auto bg-gray-300"></span>
            {addsOn.map((adds, i) => (
              <div key={i} className="flex mb-4 justify-between ">
                <p className="text-gray-400">{adds.name}</p>
                <p className="text-black-300">{adds.price}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-[230px] ml-4">
            <div>
              <p>Total(per monthly)</p>
            </div>
            <p className="text-purple-700 text-[20px] font-bold">+$12/mo</p>
          </div>
          <div className="flex items-center mt-20 gap-72">
            <a href="/step3">
              <p
                className="text-blue-950 cursor-pointer
            "
              >
                Go Back
              </p>
            </a>
            <div>
              <a href="/thankyou">
                <button
                  type="submit"
                  className="h-[44px] text-[18px] hover:bg-blue-500 cursor-pointer text-white font-bold flex items-center  justify-center w-[130px] bg-blue-800 rounded-[8px]"
                >
                  Confirm
                </button>
              </a>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
