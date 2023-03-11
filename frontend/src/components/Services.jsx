import React from "react";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const bodyLaunch = (
  <p>
    The Mars Exploration mission will launch using a balloon hybrid with the
    rocket powered by a VASIMR engine (Variable Specific Impulse Magnetoplasma
    Rocket). The rocket will launch from Kennedy Space Center,{" "}
    <p className="italic inline">the</p> hub for NASA rocket launches.
  </p>
);

// ~ 4:3
const vasimr = (
  <img
    className="mt-10 mx-auto md:w-[32rem] md:h-[21rem] w-[32rem] h-[18rem]"
    src="src/assets/vasimr.jpg"
    alt="VASIMR engine"
    key="vasimr"
  />
);

const bodyRecoverFirst = (
  <p>
    The rocket's crew capsule will separate from the rest of the rocket during
    reentry. The rest of the rocket will return to Kennedy Space Center and
    redock itself on a platform for reusability. The crew capsule will land in a
    predetermined location near Newfoundland in the Atlantic Ocean. The specific
    landing sight will be determined two weeks before landing recovery based on
    the position of the spacecraft, weather conditions at splashdown sight, and
    availability of nearby rescue teams.
  </p>
);

const bodyRecoverMid =
  "A prepositioned crew will be at the projected launch sight trained in normal \
    and emergency splash down scenarios. The mission team will establish a \
    safety zone around the landing sight to protect the boating public and \
    aircraft. Immediately after splashdown, two fast boats with personnel deploy \
    from the main recovery ship. One of these boats checks for capsule integrity \
    and tests the area around the ship for dangerous vapors. Then this boat \
    prepares the spaceship for the main recovery ship.";
const ocean = (
  <img
    className="mt-mx-auto mt-10 md:w-[32rem] md:h-[21rem] w-[32rem] h-[18rem]"
    src="src/assets/newfoundland_nasa.jfif"
    alt="VASIMR engine"
    key="vasimr"
  />
);

const ocean2 = (
  <img
    className="mt-mx-auto mt-2 md:w-[32rem] md:h-[21rem] w-[32rem] h-[18rem]"
    src="src/assets/newfoundland_nasa.jfif"
    alt="VASIMR engine"
    key="vasimr"
  />
);

const Services = () => {
  return (
    <div>
      <HeroImage
        callToAction={"This is how we do it."}
        imgSrc={"src/assets/HuntsvilleRocket.jfif"}
      />
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid card rounded-box">
          <HeroText
            heading={"Launch"}
            title={"How we'll get you to space"}
            body={bodyLaunch}
            images={[vasimr]}
          />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Recovery"}
            title={"How we'll get you back to Earth"}
            body={bodyRecoverFirst}
            images={[ocean]}
            reverseAlign={true}
          />
        </div>
        <div>
          <HeroText body={bodyRecoverMid} images={[ocean2]} heroEnd={true} />
        </div>
        {/* <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Training"}
            title={"This is how we'll prepare you."}
            body={bodyTrain}
            images={[meteo]}
          />
        </div>
        {/* move to another link/component */}
        {/* <div className="divider"></div>
        <div>
          <HeroText
            heading={"Launch and Recovery"}
            title={"Here's the whole rundown."}
            body={bodyRundown}
            images={[meteo]}
            reverseAlign={true}
          />
        </div> */}
        {/* <div className="grid card rounded-box">
          <HeroCenter heading={"Our Mission Statement"} body={bodyMission} />
        </div>
        <div className="grid card rounded-box">
          <HeroCenter body={"Join Us"} />
        </div> */}
      </div>
      {/* <button className="btn btn-primary mb-10 text-xs lg:text-sm">
        Enter
      </button> */}
    </div>
  );
};

export default Services;
