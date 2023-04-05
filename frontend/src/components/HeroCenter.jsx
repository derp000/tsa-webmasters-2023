import React from "react";

const HeroCenter = ({ heading, body }) => {
  return (
    <div
      className="hero h-fit bg-purple-500 px-2"
    >
      <div className="hero-content text-center">
        <div className="max-w-5xl my-10">
          <h6 className="md:text-2xl text-xl font-color font-bold">
            {heading}
          </h6>
          <h1 className="md:text-5xl text-4xl font-bold text-blue-900 mt-2">
            {body}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCenter;
