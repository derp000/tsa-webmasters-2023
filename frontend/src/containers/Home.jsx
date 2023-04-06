import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import NavbarTest from "../components/NavbarTest";
import Signup from "../components/Signup";
import Logistics from "../components/Logistics";
import GlobeWithPoints from "../components/GlobeWithPoints";
import MarsGlobe from "../components/MarsGlobe";
import AttractionsContainer from "../components/AttractionsContainer";
import AttractionInteractive from "../components/AttractionInteractive";
import AboutUsTSA from "../components/AboutUsTSA";

import * as mars from "./mars";
import * as moon from "./moon";
import * as venus from "./venus";
import * as mercury from "./mercury";

const categories = [
  { name: "Home", to: "Info" },
  { name: "Attractions", to: "Attractions" },
  { name: "Safety/Logistics", to: "SafetyLogistics" },
  // { name: "Pricing", to: "Pricing" },
  {name: "About", to: "AboutUsTSA"}
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
        <Route path="/Info" element={<AboutUs />} />
        <Route path="/Attractions" element={<AttractionsContainer />} />
        <Route
          path={"/Attractions/Mars"}
          element={
            <AttractionInteractive
              title={"Martian Sightseeing"}
              body={
                "Learn about some of the most awe-inspiring landscapes Mars you'll visit. Click on a marker to learn more."
              }
              arcsData={mars.arcsData}
              arcColor={"#c7c56f"}
              gData={mars.gData}
              globeImg={"/images/mars_uv.jpg"}
              markerColor={"orange"}
              startPos={mars.GLOBE_START}
              drawerStyle={"bg-gradient-to-b from-orange-700 to-red-500"}
              // headerImgUrl={"/images/mars.jpg"}
            />
          }
        />
        <Route
          path="/Attractions/Moon"
          element={
            <AttractionInteractive
              title="Moon Exploration"
              body="Explore the surface of the moon just like how the astronauts did five decades ago."
              arcsData={moon.arcsData}
              gData={moon.gData}
              globeImg={"/images/moon_uv.jpg"}
              markerColor={"lightblue"}
              arcColor={"white"}
              startPos={moon.GLOBE_START}
              drawerStyle={"bg-gradient-to-b from-gray-700 to-blue-400"}
            />
          }
        />
        <Route
          path="/Attractions/Venus"
          element={
            <AttractionInteractive
              title="Venus Voyage"
              body="Visit this alien-like planet and observe it from the safety of your Orbit Transition Vehicle."
              arcsData={venus.arcsData}
              gData={venus.gData}
              globeImg={"/images/venus_uv.jpg"}
              markerColor={"lightblue"}
              arcColor={"white"}
              atmosphereColor={"red"}
              startPos={venus.GLOBE_START}
              drawerStyle={"bg-gradient-to-b from-red-600 to-yellow-600"}
            />
          }
        />
        <Route
          path="/Attractions/Mercury"
          element={
            <AttractionInteractive
              title="Mercury Adventure"
              body="Find out what this mysterious little planet has in store."
              arcsData={mercury.arcsData}
              gData={mercury.gData}
              globeImg={"/images/mercury_uv.jpg"}
              markerColor={"lightblue"}
              arcColor={"white"}
              atmosphereColor={"orange"}
              startPos={mercury.GLOBE_START}
              drawerStyle={"bg-gradient-to-b from-blue-900 to-fuchsia-400"}
            />
          }
        />

        <Route path="/SafetyLogistics" element={<Logistics />} />
        {/* <Route path="/Pricing" element={<Pricing />} /> */}

        {/* <Route path="/Legal" element={<Legal />} /> */}
        {/* <Route path="/Testing4" element={<GlobeArcPoints />} /> */}
        {/* <Route path="/Testing2" element={<MarsGlobe />} /> */}
        {/* <Route path="/Testing3" element={<NavbarTest />} /> */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="AboutUsTSA" element={<AboutUsTSA />} />
        {/* Outreach (promotion),  */}
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
