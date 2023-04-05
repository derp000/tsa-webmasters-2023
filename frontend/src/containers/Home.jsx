import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import NavbarTest from "../components/NavbarTest";
import Signup from "../components/Signup";
import Logistics from "../components/Logistics";
import GlobeArcPoints from "../components/GlobeArcPoints";
import MarsGlobe from "../components/MarsGlobe";
import AttractionsContainer from "../components/AttractionsContainer";
import AttractionInteractive from "../components/AttractionInteractive";

import * as mars from "./mars";

const categories = [
  { name: "About", to: "AboutUs" },
  { name: "Attractions", to: "Attractions" },
  { name: "Safety/Logistics", to: "Safety" },
  { name: "Pricing", to: "Pricing" },
  // { name: "Legal", to: "Legal" },
  // { name: "Join", to: "Signup" },
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
                  "Visit some of the most awe-inspiring landscapes Mars has to offer. Click on a marker to learn more."
                }
                arcsData={mars.arcsData}
                gData={mars.gData}
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
        <Route path="/Signup" element={<Signup />} />
        {/* Outreach (promotion),  */}
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
