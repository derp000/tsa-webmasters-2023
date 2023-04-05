import React from "react";
import HeroCenter from "./HeroCenter";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

import * as text from "./logisticsText";
import * as img from "./logisticsImages";

const bgLink = `url("src/assets/constellation.jpg")`;

// rename as logistics, keep vehicles here but move products to about
const Logistics = () => {
  return (
    <div>
      <HeroImage
        callToAction={"This is how we do it."}
        imgSrc={"src/assets/HuntsvilleRocket.jfif"}
      />
      <div className="flex flex-col w-full border-opacity-50 bg-gray-400">
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Launch"}
            title={"How we'll get you to space"}
            body={text.bodyLaunch}
            images={[img.vasimr]}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Recovery"}
            title={"How we'll get you back to Earth"}
            body={text.bodyRecoverFirst}
            images={[img.ocean]}
            reverseAlign={true}
            multiHero={true}
            bgLink={bgLink}
          />
        </div>
        <div className="grid card rounded-box">
          <HeroText
            body={text.bodyRecoverMid}
            images={[img.ocean2]}
            multiHero={true}
            bgLink={bgLink}
          />
        </div>
        <div className="grid card rounded-box">
          <HeroText
            body={text.bodyRecoverLast}
            images={[img.ocean2]}
            reverseAlign={true}
            multiHero={true}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroCenter
            body={"Meet our Vehicles"}
            bgColor={"bg-gradient-to-r from-purple-500 to-indigo-500"}
          />
        </div>
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Get ready for state-of-the-art mars exploration"}
            title={"The Charon"}
            body={text.bodyCharon}
            images={[img.charon]}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"For those who want to experience Mars from afar"}
            title={"The OTV"}
            body={text.bodyOtv}
            images={[img.otv]}
            reverseAlign={true}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        {/* <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Training"}
            title={"This is how we'll prepare you."}
            body={bodyTrain}
            images={[meteo]}
          />
        </div>
        {/* move to another link/component */}
        {/* <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
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
