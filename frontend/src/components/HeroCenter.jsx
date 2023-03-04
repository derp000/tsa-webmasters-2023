import React from "react";

const HeroCenter = ({ heading, body }) => {
  return (
    <div className="hero h-fit bg-orange-100 px-2">
      <div className="hero-content text-center">
        <div className="max-w-5xl my-10">
          <h6 className="md:text-2xl text-xl font-bold">{heading}</h6>
          <h1 className="md:text-5xl text-4xl font-bold mt-2">{body}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroCenter;
