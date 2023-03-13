import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import MarsGlobe from "../components/MarsGlobe";
import MarsGlobeArc from "../components/MarsGlobeArc"
import TestResize from "../components/TestResize";
import NavbarTest from "../components/NavbarTest";
import Eligibility from "../components/Eligibility";
import Logistics from "../components/Logistics";

const categories = [
  { name: "About", to: "AboutUs" },
  { name: "Services", to: "Services" },
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
        <Route path="/Services" element={<Logistics />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Testing4" element={<MarsGlobeArc />} />
        <Route path="/Testing2" element={<TestResize />} />
        <Route path="/Testing3" element={<NavbarTest />} />
        <Route path="/Eligibility" element={<Eligibility />} />
        {/* Outreach (promotion),  */}
      </Routes>
      <Footer />
    </>
  );
};

export default Home;
