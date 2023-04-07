import React from "react";
import Checkbox from "./Checkbox";

const Checklist = ({ criteria, disclaimer }) => {
  // maybe have it as a hero with a background image
  return (
    <div className="hero h-fit bg-cover px-2" style={{backgroundImage: `url(images/constellation.jpg)`}}>
      <div className={"hero-content"}>
        <div className="max-w-5xl">
          <h6 className="md:text-2xl text-xl font-bold mt-10 text-center">
            Helios maintains high safety standards
          </h6>
          <h1 className="md:text-7xl text-5xl font-bold mt-2 text-center">
            Eligibility Requirements
          </h1>
          <div className="flex flex-col md:gap-2 md:mt-5 md:items-start">
            {criteria.map((crit, i) => (
              <Checkbox textElem={crit} key={i} />
            ))}
          </div>
          {disclaimer}
        </div>
      </div>
    </div>
  );
};

export default Checklist;
