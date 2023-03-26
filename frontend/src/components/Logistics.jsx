import React from "react";
import HeroCenter from "./HeroCenter";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

import * as text from "./logisticsText";
import * as img from "./logisticsImages";

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
            body={text.bodyLaunch}
            images={[img.vasimr]}
          />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Recovery"}
            title={"How we'll get you back to Earth"}
            body={text.bodyRecoverFirst}
            images={[img.ocean]}
            reverseAlign={true}
            multiHero={true}
          />
        </div>
        <div className="grid card rounded-box">
          <HeroText
            body={text.bodyRecoverMid}
            images={[img.ocean2]}
            multiHero={true}
          />
        </div>
        <div className="grid card rounded-box">
          <HeroText
            body={text.bodyRecoverLast}
            images={[img.ocean2]}
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
            body={text.bodyCharon}
            images={[img.charon]}
          />
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"For those who want to experience Mars from afar"}
            title={"The OTV"}
            body={text.bodyOtv}
            images={[img.otv]}
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
