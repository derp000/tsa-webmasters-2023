import React from "react";
import HeroCenter from "./HeroCenter";
import HeroImage from "./HeroImage";
import HeroReview from "./HeroReview";
import HeroText from "./HeroText";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/20/solid";

const reviews = [
  <ReviewCard key="r1" />,
  <ReviewCard key="r2" />,
  <ReviewCard key="r3" />,
];

const bgLink = `url("/images/constellation.jpg")`;

const AttractionNoninteractive = ({ title, gData }) => {
  return (
    <div>
      <HeroImage callToAction={title} />

      <div className="flex flex-col w-full border-opacity-50 bg-gradient-to-r from-blue-400 to-fuchsia-400">
        <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
        <div className="bg-black w-full h-10">
          <Link to="/Attractions" className="absolute ml-4 mt-4 h-7 w-7">
            <XCircleIcon className="fill-white" />
          </Link>
        </div>
        {gData.map((location) => (
          <>
            <div className="grid card rounded-box">
              <HeroText
                title={location.name}
                body={location.info}
                images={[
                  <img
                    src={location.imgUrl}
                    className="mt-10 mx-auto md:w-[48rem] md:h-[28rem] w-[32rem] h-[18rem] rounded-2xl"
                    key={location.name}
                  />,
                ]}
                bgLink={bgLink}
              />
            </div>
            <div className="divider before:bg-purple-200 after:bg-purple-200"></div>
          </>
        ))}
        {/* <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
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
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          <HeroText
            heading={"Training"}
            title={"This is how we'll prepare you."}
            body={text.bodyTrain}
            images={[img.meteo]}
            bgLink={bgLink}
          />
        </div>
        {/* move to another link/component 
        <div className="divider before:bg-purple-900 after:bg-purple-900"></div>
        <div className="grid card rounded-box">
          {/* <HeroCenter body={"Testimonials"} />
          <HeroReview reviews={reviews} />
        </div>
        have customer reviews here */}
      </div>
    </div>
  );
};

export default AttractionNoninteractive;
