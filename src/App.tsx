import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Sidebar from "./components/Step1";
import FormContainer from "./components/FormContainer";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ThankYou from "./components/ThankYou";

function App() {
  // let heights = height.sort();
  // for (let i = 0; i < heights.length; i++) {
  //   if (heights[heights.length - 1] > k) {
  //     let portion = k - heights[i];
  //     console.log(portion);
  //   } else heights[heights.length - 1] === k || heights[heights.length - 1] < k;
  // }

  // function viralAdvertising(n) {
  //   let shared = 5;
  //   let cumulative = 0;
  //   let liked = 0;

  //   for (let i = 1; i <= n; i++){
  //     liked = Math.floor(shared/2);
  //     cumulative += liked;
  //     shared = liked * 3;
  //   }

  //   return cumulative;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
