import React from "react";
import AttractionCard from "./AttractionCard";
import CardContainer from "./CardContainer";
import HeroImage from "./HeroImage";

const cards = [
  <AttractionCard
    title={"Martian Sightseeing"}
    imgSrc={"src/assets/mars.jpg"}
    to={"/Attractions/Mars"}
    key="mars"
  />,
  <AttractionCard
    title={"Moon Exploration"}
    imgSrc="src/assets/moon.jpg"
    to="/Attractions/Moon"
    key="moon"
  />,
  <AttractionCard
    title={"Venus"}
    imgSrc="src/assets/venus_uv.jpg"
    to="/Attractions/Venus"
    key="venus"
  />,
];

const AttractionsContainer = () => {
  return (
    <div>
      <HeroImage
        callToAction={"Find out what we offer"}
        imgSrc={"src/assets/mars.jpg"}
      />

      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid card rounded-box">
          <CardContainer cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default AttractionsContainer;
