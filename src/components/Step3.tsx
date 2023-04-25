import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { FaCheck } from "react-icons/fa";
import { useAppContext } from "../context/context";

export default function Step3() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const { addsOn, chooseAddOn, clearAddOn } = useAppContext();
  useEffect(() => {
    clearAddOn();
  }, []);

  return (
    <div>
      <FormContainer>
        <div className="p-7">
          <div>
            <p className="text-[36px] capitalize mb-2 font-bold text-blue-950">
              Pick adds-on
            </p>
            <h2 className="text-gray-400 text-[18px] mb-10">
              Adds-on help enhance gaming experence
            </h2>
          </div>
          <div
            onClick={() => {
              setCheck1(!check1);
              chooseAddOn({ name: "Online service", price: "+$1" });
            }}
            className={`${
              check1 ? "bg-slate-100" : null
            } h-[80px] flex items-center cursor-pointer  justify-center w-[480px] border-[1.3px] border-purple-900 rounded-md`}
          >
            <div className="flex items-center gap-[115px]">
              <div className="flex items-center gap-6">
                <div
                  className={`${
                    check1 ? "bg-[#473ddd]" : "bg-white border border-gray-400"
                  } h-[20px] w-[20px] flex items-center justify-center rounded-sm `}
                >
                  <FaCheck
                    className={`${
                      check1 ? "visible" : "hidden"
                    } text-white text-[12px]`}
                  />
                </div>

                <div>
                  <p className="text-blue-950 font-semibold">Online service</p>
                  <h2 className="text-gray-400">Access to multiplayer games</h2>
                </div>
              </div>
              <div>
                <p className="text-[#473ddd]">+$1/mo</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setCheck2(!check2);
              chooseAddOn({ name: "Larger storage", price: "+$1" });
            }}
            className={`${
              check2 ? "bg-slate-100" : null
            } h-[80px] mt-4 flex items-center cursor-pointer  justify-center w-[480px] border-[1.3px] border-purple-900 rounded-md`}
          >
            <div className="flex items-center gap-40">
              <div className="flex items-center gap-6">
                <div
                  className={`${
                    check2 ? "bg-[#473ddd]" : "bg-white border border-gray-400"
                  } h-[20px] w-[20px] flex items-center justify-center rounded-sm `}
                >
                  <FaCheck
                    className={`${
                      check2 ? "visible" : "hidden"
                    } text-white text-[12px]`}
                  />
                </div>

                <div>
                  <p className="text-blue-950 font-semibold">Larger storage</p>
                  <h2 className="text-gray-400">Extra 1TB of cloud save</h2>
                </div>
              </div>
              <div>
                <p className="text-[#473ddd]">+$2/mo</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setCheck3(!check3);
              chooseAddOn({ name: "Customizable", price: "+$2" });
            }}
            className={`${
              check3 ? "bg-slate-100" : null
            } h-[80px] mt-4 flex items-center cursor-pointer  justify-center w-[480px] border-[1.3px] border-purple-900 rounded-md`}
          >
            <div className="flex items-center gap-28">
              <div className="flex items-center gap-6">
                <div
                  className={`${
                    check3 ? "bg-[#473ddd]" : "bg-white border border-gray-400"
                  } h-[20px] w-[20px] flex items-center justify-center rounded-sm `}
                >
                  <FaCheck
                    className={`${
                      check3 ? "visible" : "hidden"
                    } text-white text-[12px]`}
                  />
                </div>

                <div>
                  <p className="text-blue-950 font-semibold">Customizable</p>
                  <h2 className="text-gray-400">
                    Custom theme on your profile
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-[#473ddd]">+$2/mo</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-[45px] gap-72">
            <a href="step2">
              <p
                className="text-gray-400 hover:text-blue-800 cursor-pointer
                "
              >
                Go Back
              </p>
            </a>
            <div>
              <a href="/step4">
                <button
                  type="submit"
                  className="h-[44px] text-[18px] hover:bg-blue-500 cursor-pointer text-white font-bold flex items-center  justify-center w-[130px] bg-blue-950 rounded-[8px]"
                >
                  Next Step
                </button>
              </a>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
