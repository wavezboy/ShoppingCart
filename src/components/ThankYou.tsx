import React from "react";
import FormContainer from "./FormContainer";
import ThankYo from "../assets/images/icon-thank-you.svg";

export default function ThankYou() {
  return (
    <div>
      <FormContainer>
        <div className="flex mt-36 items-center flex-col  gap-6">
          <div>
            <img src={ThankYo} alt="" />
          </div>
          <div>
            <p className="text-blue-950 font-bold  text-[28px]">Thank you!</p>
          </div>
          <div>
            <h2 className="text-gray-400 w-[500px] text-center ">
              Thanks for confirming your subscriptions! we hope you have fun
              using our platform. if you ever need support please feel free to
              email us at support@loremgamin.com
            </h2>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
