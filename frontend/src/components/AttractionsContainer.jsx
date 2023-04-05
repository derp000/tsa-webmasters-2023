import React from "react";
import AttractionCard from "./AttractionCard";
import CardContainer from "./CardContainer";
import HeroCenter from "./HeroCenter";

const cards = [
  <AttractionCard
    title={"Martian Sightseeing"}
    imgSrc={"src/assets/mars.png"}
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
    title={"Venus Voyage"}
    imgSrc="src/assets/venus.jpeg"
    to="/Attractions/Venus"
    key="venus"
  />,
];

const AttractionsContainer = () => {
  return (
    <div>
      <HeroCenter
        body={"Click to find what we offer"}
        bgColor="bg-gradient-to-r from-purple-700 to-red-600"
      />

      <div
        className="flex flex-col w-full border-opacity-50 bg-cover"
        style={{ backgroundImage: `url(src/assets/constellation.jpg)` }}
      >
        <div className="grid card rounded-box py-20">
          <CardContainer cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default AttractionsContainer;
