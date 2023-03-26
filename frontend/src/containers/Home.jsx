import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import NavbarTest from "../components/NavbarTest";
import Eligibility from "../components/Eligibility";
import Logistics from "../components/Logistics";
import Attractions from "../components/AttractionsContainer";
import GlobeArcPoints from "../components/GlobeArcPoints";
import MarsGlobe from "../components/MarsGlobe";
import AttractionsContainer from "../components/AttractionsContainer";
import AttractionInteractive from "../components/AttractionInteractive";

const categories = [
  { name: "About", to: "AboutUs" },
  { name: "Attractions", to: "Attractions" },
  { name: "Safety/Logistics", to: "Safety" },
  { name: "Pricing", to: "Pricing" },
  { name: "Legal", to: "Legal" },
];

const attractions = ["Mars", "Moon"];

const Home = () => {
  return (
    <>
      <Navbar categories={categories} />
      <Routes>
        <Route
          path="/"
          className="flex justify-center items-start"
          element={<LandingPage />}
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Attractions" element={<AttractionsContainer />} />
        {attractions.map((a) => (
          <Route
            path={`/Attractions/${a}`}
            element={
              <AttractionInteractive
                title={"Martian Sightseeing"}
                body={
                  "Visit some of the most awe-inspiring landscapes Mars has to offer."
                }
              />
            }
            key={a}
          />
        ))}
        <Route path="/Safety" element={<Logistics />} />
        <Route path="/Pricing" element={<Pricing />} />

        <Route path="/Legal" element={<Legal />} />
        <Route path="/Testing4" element={<GlobeArcPoints />} />
        <Route path="/Testing2" element={<MarsGlobe />} />
        <Route path="/Testing3" element={<NavbarTest />} />
        <Route path="/Eligibility" element={<Eligibility />} />
        {/* Outreach (promotion),  */}
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
