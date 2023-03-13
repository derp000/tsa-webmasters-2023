import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import NavbarTest from "../components/NavbarTest";
import Eligibility from "../components/Eligibility";
import Logistics from "../components/Logistics";
import Attractions from "../components/Attractions";
import GlobeArcPoints from "../components/GlobeArcPoints";

const categories = [
  { name: "About", to: "AboutUs" },
  { name: "Attractions", to: "Attractions" },
  { name: "Safety/Logistics", to: "Safety" },
  { name: "Pricing", to: "Pricing" },
  { name: "Legal", to: "Legal" },
];

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
        <Route path="/Offerings" element={<Attractions />} />
        <Route path="/Safety" element={<Logistics />} />
        <Route path="/Pricing" element={<Pricing />} />

        <Route path="/Legal" element={<Legal />} />
        <Route path="/Testing4" element={<GlobeArcPoints />} />
        <Route path="/Testing2" element={<ReviewCard />} />
        <Route path="/Testing3" element={<NavbarTest />} />
        <Route path="/Eligibility" element={<Eligibility />} />
        {/* Outreach (promotion),  */}
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
