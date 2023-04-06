import React from "react";
import { NavLink } from "react-router-dom";

const LandingPageMobile = ({ imgSrc }) => {
  return (
    <div
      className="grid lg:hidden hero max-w-screen min-h-screen"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 text-white">
        {/* <img
          src="https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Become the next astronaut.</h1>
          <p className="text-2xl py-6">
            Create a fictitious company and design an appropriate website. The
            website should provide information starting with promotion, basic cd
            information, cost, planning, training, vehicles, safety, launch, and
            recovery.
          </p>
          <div className="btn btn-secondary">
            <NavLink to="/Info">Get Started</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageMobile;
