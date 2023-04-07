import React from "react";

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
          <h1 className="text-5xl font-bold">
            The sky's the limit...or is it?
          </h1>
          <p className="text-2xl py-6">
            Helios name comes from the Greek God Helios. Helios, the sun god,
            traveled through the skies in a chariot. We felt this name was
            fitting for our company, which trains astronauts and gives them the
            opportunity to travel around the solar system.
          </p>
          <a href="/Home">
            <div className="btn btn-secondary">Get Started</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPageMobile;
