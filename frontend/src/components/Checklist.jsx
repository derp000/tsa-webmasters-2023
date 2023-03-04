import React from "react";
import Checkbox from "./Checkbox";

const criteria = [
  "In an effort to make astronaut training and space more accessible, Helios accepts astronaut applications from any UN recognized country or territory!",
  "Pass ACTFL English fluency exam",
  "(Suggested) A doctorate degree from an accredited university or equivalent experience in natural sciences, medicine, or engineering*",
  "Teaching K-12 is considered equivalent for an astronaut candidate; educators are encouraged to apply!",
];

const Checklist = () => {
  return (
    <div className="hero h-fit bg-base-200 px-2">
      <div className={"hero-content"}>
        <div className="max-w-5xl">
          <h6 className="md:text-2xl text-xl font-bold mt-10 text-center">
            What does it take to get started?
          </h6>
          <h1 className="md:text-7xl text-5xl font-bold mt-2 text-center">
            Eligibility Requirements
          </h1>
          <div className="flex flex-col md:gap-2 md:mt-5 md:items-start">
            {criteria.map((crit, i) => (
              <Checkbox text={crit} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
