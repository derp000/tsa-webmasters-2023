import React from "react";
import GlobeRandomArcs from "./GlobeRandomArcs";
import useWindowDimensions from "./viewport";
import { NavLink } from "react-router-dom";

const GLOBE_START = { lat: 0, lng: 0, altitude: 2.0 };

const LandingPage = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="hero max-w-screen min-h-screen bg-black px-10">
      <GlobeRandomArcs
        className="absolute ml-10"
        width={width - 100}
        height={height - 100}
        startPos={GLOBE_START}
      />
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

export default LandingPage;
