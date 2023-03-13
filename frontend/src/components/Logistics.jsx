import React from "react";
import HeroCenter from "./HeroCenter";

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
  <>
    The rocket's crew capsule will separate from the rest of the rocket during
    reentry. The rest of the rocket will return to Kennedy Space Center and
    redock itself on a platform for reusability. The crew capsule will land in a
    predetermined location near Newfoundland in the Atlantic Ocean. The specific
    landing sight will be determined two weeks before landing recovery based on
    the position of the spacecraft, weather conditions at splashdown sight, and
    availability of nearby rescue teams.
  </>
);

const bodyRecoverMid = (
  <>
    A prepositioned crew will be at the projected launch sight trained in normal
    and emergency splash down scenarios. The mission team will establish a
    safety zone around the landing sight to protect the boating public and
    aircraft. Immediately after splashdown, two fast boats with personnel deploy
    from the main recovery ship. One of these boats checks for capsule integrity
    and tests the area around the ship for dangerous vapors. Then this boat
    prepares the spaceship for the main recovery ship.
  </>
);

const bodyRecoverLast = (
  <>
    The second fast boat is responsible for recovering the capsule’s parachutes
    which were earlier deployed from the capsule. Once the main recovery vessel
    is in position, it hoists the capsule on deck for the hatch to be opened.
    Medical professionals will be present to assist the crew if needed.
  </>
);

const ocean = (
  <img
    className="mt-10 mx-auto md:w-[32rem] md:h-[21rem] w-[32rem] h-[18rem]"
    src="src/assets/newfoundland_nasa.jfif"
    alt="VASIMR engine"
    key="vasimr"
  />
);

const ocean2 = (
  <img
    className="mt-2 mx-auto md:w-[32rem] md:h-[21rem] w-[32rem] h-[18rem]"
    src="src/assets/newfoundland_nasa.jfif"
    alt="VASIMR engine"
    key="vasimr"
  />
);

const bodyCharon = (
  <div className="leading-[4rem]">
    The Charon is everything you've dreamed for. This reusable and sustainable
    vehicle will get you to and from Mars. It carries 6 people and sports 33 RCS
    thrusters, 6 hypergolic engines, and 9 LOX-CH4 engines providing 310 kN of
    thurst each.
  </div>
);

// ~ 2:1
const charon = (
  <img
    className="mt-10 mx-auto sm:h-[26rem] h-96 w-[16rem]"
    src="src/assets/charonRocket2.jpg"
  />
);

const bodyOtv = (
  <div className="leading-[4rem] lg:my-16">
    Our Orbit Transition Vehicle can reach mars in just a month, 6 to 10 times
    faster than the competition thanks to our cutting-edge VASIMR engine.
  </div>
);

// ~ 3:4
const otv = (
  <img
    className="mt-10 mx-auto md:w-[16rem] md:h-[24rem] w-[16rem] h-[24rem]"
    src="src/assets/orbiter.jpg"
  />
);

// rename as logistics, keep vehicles here but move products to about
const Logistics = () => {
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
            multiHero={true}
          />
        </div>
        <div className="grid card rounded-box">
          <HeroText body={bodyRecoverMid} images={[ocean2]} multiHero={true} />
        </div>
        <div className="grid card rounded-box">
          <HeroText
            body={bodyRecoverLast}
            images={[ocean2]}
            reverseAlign={true}
            multiHero={true}
          />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroCenter body={"Meet our Vehicles"} />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Get ready for state-of-the-art mars exploration"}
            title={"The Charon"}
            body={bodyCharon}
            images={[charon]}
          />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"For those who want to experience Mars from afar"}
            title={"The OTV"}
            body={bodyOtv}
            images={[otv]}
            reverseAlign={true}
          />
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

export default Logistics;
