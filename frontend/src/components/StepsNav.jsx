import React from "react";

const StepsNav = ({ currentStep }) => {
  const steps = [
    "Meet Qualifications",
    "Register",
    "Choose an Excursion",
    "Finish!",
  ];

  return (
    <ul className="steps steps-horizontal mb-14 mt-5">
      {steps.map((s, i) => (
        <li className={`step ${i <= currentStep - 1 ? "step-primary" : ""} text-xl`}>
          {s}
        </li>
      ))}
    </ul>
  );
};

export default StepsNav;
