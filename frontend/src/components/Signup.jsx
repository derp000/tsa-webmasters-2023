import { React, useState, useEffect } from "react";
import Confetti from "react-confetti";

import Alert from "./Alert";
import Checklist from "./Checklist";
import HeroImage from "./HeroImage";
import StepsNav from "./StepsNav";
import Form from "./Form";
import AttractionCard from "./AttractionCard";
import CardContainer from "./CardContainer";

import useWindowDimensions from "./viewport";

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

const Signup = () => {
  const { width, height } = useWindowDimensions();
  const [step, setStep] = useState(1);
  const [numParticles, setNumParticles] = useState(200);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showError, setShowError] = useState(false);
  const [active, setActive] = useState(false);

  const formContent = [
    {
      prompt: "Enter your name",
      extra: "",
      key: "name",
      handleKeyPress: () => {},
    },
    {
      prompt: "Enter your email",
      extra: "",
      key: "email",
      handleChange: () => setEmail((e) => e.target.value),
    },
    {
      prompt: "Enter your phone number",
      extra: "",
      key: "If you're outside the US/Canada, please include your country's calling code!",
      handleChange: () => setPhone((e) => e.target.value),
    },
  ];

  useEffect(() => {
    function onTimeout() {
      setNumParticles(0);
    }

    const timeoutId = setTimeout(onTimeout, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <AttractionCard
        title={"Title Here"}
        imgSrc={"src/assets/HuntsvilleRocket.jfif"}
        onContentClick={() => setStep(step + 1)}
      />
    );
  }

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
            <div
              className="btn btn-primary mb-4"
              onClick={() => setStep(step + 1)}
            >
              Next
            </div>
          </div>
        </>
      );
      break;
    // fill out form
    case 2:
      renderedTitle = "Fill out necessary details.";
      renderedStep = (
        <>
          <Form formContent={formContent} />
          {showError && <Alert error={"Invalid email or phone number!"} />}
          <div className="hero p-4">
            <div className="grid grid-cols-2 gap-5">
              <div
                className="btn btn-primary"
                onClick={() => setStep(step - 1)}
              >
                Previous
              </div>
              <div
                className="btn btn-primary"
                onClick={() => {
                  // if (
                  //   !/.+@.+\.[A-Za-z]+$/.test(email) &&
                  //   !/[0-9]/.test(phone)
                  // ) {
                  //   setShowError(true);
                  //   return;
                  // }
                  // setShowError(false);
                  setStep(step + 1);
                }}
              >
                Next
              </div>
            </div>
          </div>
          ;
        </>
      );
      break;
    // choose product
    case 3:
      renderedTitle = "Choose your once-in-a-lifetime trip!";
      renderedStep = (
        <>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card rounded-box">
              <CardContainer cards={cards} />
            </div>
          </div>
          <div className="hero p-4">
            <div className="btn btn-primary" onClick={() => setStep(step - 1)}>
              Previous
            </div>
          </div>
        </>
      );
      break;
    case 4:
      renderedTitle = "Thanks for choosing Helios!";
      renderedStep = (
        <>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            recycle={false}
          />
          <div className="hero h-fit px-2">
            <div className="max-w-5xl text-center">
              <h1 className="md:text-7xl text-5xl font-bold mt-2">
                You're in good hands.
              </h1>
              <div className="lg:text-2xl text-2xl max-w-3xl lg:leading-loose leading-loose py-6">
                You'll be guided by professionally trained tour guides with
                years of aeronautical and astronautical experience. We'll make
                sure you're trip is the best it can be, or your money back!
              </div>
            </div>
          </div>
        </>
      );
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
      <div className="hero py-5">
        <StepsNav currentStep={step} />
      </div>
      {renderedStep}
      {/* {step} */}
    </div>
  );
};

export default Signup;
