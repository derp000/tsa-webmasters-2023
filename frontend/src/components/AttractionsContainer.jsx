import { GlobeAsiaAustraliaIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AttractionCard from "./AttractionCard";
import CardContainer from "./CardContainer";
import HeroImage from "./HeroImage";
import MarsGlobe from "./MarsGlobe";

const cards = [];
for (let i = 0; i < 6; i++) {
  cards.push(
    <AttractionCard
      title={"Title Here"}
      imgSrc={"src/assets/HuntsvilleRocket.jfif"}
      to={"/Attractions/Mars"}
    />
  );
}

const AttractionsContainer = () => {
  return (
    <div>
      <HeroImage
        callToAction={"Find out what we offer"}
        imgSrc={"src/assets/HuntsvilleRocket.jfif"}
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
