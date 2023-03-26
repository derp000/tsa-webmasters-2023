import { React, useState } from "react";
import { Link } from "react-router-dom";
import Checklist from "./Checklist";
import HeroImage from "./HeroImage";
import StepsNav from "./StepsNav";
import Form from "./Form";

const criteria = [
  <p>
    In an effort to make astronaut training and space more accessible, Helios
    accepts astronaut applications from any UN recognized country or territory!
  </p>,
  <p>Pass ACTFL English fluency exam</p>,
  <p>
    Mental exam (includes an MSE, mental status exam, MBTI, Myer-Briggs
    personality exam) and personal interviews
  </p>,
  <p>
    Physical exam (distal and near eyesight correctable to 20/20 in each eye,
    blood pressure not exeeding 140/90 when sitting) and a medical screening{" "}
  </p>,
  <p>
    Teaching K-12 is considered equivalent for an astronaut candidate; educators
    are encouraged to apply!
  </p>,
];

const Eligibility = () => {
  const [step, setStep] = useState(1);

  let renderedTitle = "Ready for an out-of-this-world experience?";
  let renderedStep = (
    <>
      <Checklist criteria={criteria} className="w-full content-center" />
      <div className="hero p-4">
        <div className="btn btn-primary" onClick={() => setStep(step + 1)}>
          Next
        </div>
      </div>
    </>
  );
  switch (step) {
    case 1:
      renderedTitle = "Ready for an out-of-this-world experience?";
      renderedStep = (
        <>
          <Checklist criteria={criteria} className="w-full content-center" />
          <div className="hero p-4">
            <div className="btn btn-primary" onClick={() => setStep(step + 1)}>
              Next
            </div>
          </div>
        </>
      );
      break;
    // fill out form
    case 2:
      renderedTitle = "Fill out necessary details."
      break;
    // choose product
    case 3:
      renderedTitle = "Choose your once-in-a-lifetime trip!"
      break;
    default:
      renderedTitle = "Ready for an out-of-this-world experience?";
      renderedStep = (
        <>
          <Checklist criteria={criteria} className="w-full content-center" />
          <div className="hero p-4">
            <div className="btn btn-primary" onClick={() => setStep(step + 1)}>
              Next
            </div>
          </div>
        </>
      );
      break;
  }

  return (
    <div>
      <HeroImage callToAction={renderedTitle} />
      <div className="hero p-4">
        <StepsNav currentStep={step} />
      </div>
      {/* {renderedStep} */}
      <Form />
      {step}
    </div>
  );
};

export default Eligibility;
