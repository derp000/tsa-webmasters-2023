import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { LandingPage, AboutUs, Services, Pricing, Legal } from "../components";
import Footer from "../components/Footer";
import TestingGlobe from "../components/TestingGlobe";
import TestResize from "../components/TestResize";
import NavbarTest from "../components/NavbarTest";
import Eligibility from "../components/Eligibility";

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
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Testing" element={<TestingGlobe />} />
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
