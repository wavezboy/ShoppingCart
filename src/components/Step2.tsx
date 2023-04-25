import React, { useState } from "react";
import FormContainer from "./FormContainer";
import avdanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
export default function Step2() {
  const [click, setClick] = useState(false);
  const [selectArcade, setSelectArcade] = useState(false);
  const [selectAdvanced, setSelectAdvanced] = useState(false);
  const [selectPro, setSelectPro] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [yearly, setYearly] = useState(false);
  return (
    <div>
      <FormContainer>
        <div className="p-7">
          <div>
            <p className="text-[36px] capitalize mb-2 font-bold text-blue-950">
              select your plan
            </p>
            <h2 className="text-gray-400 text-[18px] mb-10">
              You have the option of monthly, or yearly billing.
            </h2>
          </div>
          <div className="flex gap-4">
            <div
              onClick={() => {
                setSelectArcade(!selectArcade);
              }}
              className={`${
                selectArcade
                  ? "bg-slate-100  border-[1px] border-blue-950  "
                  : null
              } h-[170px] w-[145px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer flex flex-col justify-between p-4 rounded-md`}
            >
              <div>
                <img src={arcade} alt="" />
              </div>
              <div>
                {click ? (
                  <>
                    <p className="text-blue-950 font-semibold">Arcade</p>
                    <h2 className="text-gray-400 mt-1 mb-1">$90/yr</h2>
                    <p className="text-blue-950 font-normal text-[15px]">
                      2 months free
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-blue-950 mb-1 font-semibold">Arcade</p>
                    <h2 className="text-gray-400">$9/mo</h2>
                  </>
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setSelectAdvanced(!selectAdvanced);
              }}
              className={`${
                selectAdvanced
                  ? "bg-slate-100  border-[1px] border-blue-950  "
                  : null
              } h-[170px] w-[145px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer flex flex-col justify-between p-4 rounded-md`}
            >
              <div>
                <img src={avdanced} alt="" />
              </div>
              <div>
                {click ? (
                  <>
                    <p className="text-blue-950 font-semibold">Advanced</p>
                    <h2 className="text-gray-400 mt-1 mb-1">$120/yr</h2>
                    <p className="text-blue-950 font-normal text-[15px]">
                      2 months free
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-blue-950 mb-1 font-semibold">Advanced</p>
                    <h2 className="text-gray-400">$12/mo</h2>
                  </>
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setSelectPro(!selectPro);
              }}
              className={`${
                selectPro
                  ? "bg-slate-100  border-[1px] border-blue-950  "
                  : null
              } h-[170px] w-[145px]   hover:border-[1px] hover:border-blue-950  border-[1px] cursor-pointer flex flex-col justify-between p-4 rounded-md`}
            >
              <div>
                <img src={pro} alt="" />
              </div>
              <div>
                {click ? (
                  <>
                    <p className="text-blue-950 font-semibold">Pro</p>
                    <h2 className="text-gray-400 mt-1 mb-1">$150/yr</h2>
                    <p className="text-blue-950 font-normal text-[15px]">
                      2 months free
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-blue-950 mb-1 font-semibold">Pro</p>
                    <h2 className="text-gray-400">$15/mo</h2>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="h-[50px] flex items-center justify-center w-[480px] mt-6 rounded-sm gap-4 bg-gray-100">
            <p
              className={`${
                click ? "text-gray-400" : "text-blue-950 font-semibold"
              }`}
            >
              Monthly
            </p>
            <div className="bg-blue-950 h-[20px] flex items-center  w-[50px] rounded-xl">
              <span
                onClick={() => {
                  setClick(!click);
                }}
                className={`${
                  click ? "translate-x-7" : "translate-x-0"
                } h-[15px] transition-all ml-1 cursor-pointer  w-[15px] block rounded-full bg-white`}
              ></span>
            </div>
            <h2
              className={`${
                click ? "text-blue-950 font-semibold" : "text-gray-400"
              }`}
            >
              Yearly
            </h2>
          </div>
          <div className="flex items-center mt-28 gap-72">
            <a href="step1">
              <p
                className="text-gray- hover:text-blue-800 cursor-pointer
            "
              >
                Go Back
              </p>
            </a>
            <div>
              <a href="/step3">
                <button
                  type="submit"
                  className="h-[44px] text-[18px] cursor-pointer text-white font-bold flex items-center hover:bg-blue-500  justify-center w-[130px] bg-blue-950 rounded-[8px]"
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
