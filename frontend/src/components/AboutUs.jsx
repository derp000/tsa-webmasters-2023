import React from "react";
import HeroCenter from "./HeroCenter";
import HeroImage from "./HeroImage";
import HeroReview from "./HeroReview";
import HeroText from "./HeroText";
import ReviewCard from "./ReviewCard";

import * as img from "./aboutUsImages";
import * as text from "./aboutUsText";

const reviews = [
  <ReviewCard key="r1" />,
  <ReviewCard key="r2" />,
  <ReviewCard key="r3" />,
];

const bgLink = `url("images/constellation.jpg")`;

// TODO: mission statement
// TODO: contact info footer
// TODO: have logistics link to put launch/recovery and vehicles
//        - Newfoundland make globe animation
// for signup, make it 2 parts (with the daisyui progress bar component), first part just shows eligibility, second part is actual form
const AboutUs = () => {
  return (
    <div>
      <HeroImage
        callToAction={text.cta}
        imgSrc={"src/images/HuntsvilleRocket.jfif"}
      />

      <div className="flex flex-col w-full border-opacity-50 bg-gradient-to-r from-blue-400 to-fuchsia-400">
        <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"The best of the best"}
            title={"Home to leading aerospace professionals."}
            body={text.bodyIntro}
            images={[img.nasa, img.esa]}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Welcome to AL"}
            title={"Born in the heart of Alabama's space industry."}
            body={text.bodySite}
            images={[img.huntsville]}
            reverseAlign={true}
            bgLink={bgLink}
          />
        </div>
        <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Training"}
            title={"This is how we'll prepare you."}
            body={text.bodyTrain}
            images={[img.meteo]}
            bgLink={bgLink}
          />
        </div>
        {/* move to another link/component */}
        <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
        <div className="grid card rounded-box">
          {/* <HeroCenter body={"Testimonials"} />
          <HeroReview reviews={reviews} /> */}
        </div>
        {/* have customer reviews here */}
      </div>
    </div>
  );
};

export default AboutUs;
