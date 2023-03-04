import React from "react";
import Checkbox from "./Checkbox";

const Checklist = () => {
  return (
    <div className="hero h-fit bg-base-200 px-2">
      <div className={"hero-content"}>
        <div className="max-w-5xl">
          <h1 className="md:text-7xl text-5xl font-bold mt-2 text-center">
            What does it take to get started?
          </h1>
          <div className="flex flex-col md:gap-10 md:mt-5 md:items-start">
            <Checkbox text={"hi world"} />
            <Checkbox text={"check2"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
