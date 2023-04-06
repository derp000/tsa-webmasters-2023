import React from "react";
import AboutUsTSAWorksCited from "./AboutUsTSAWorksCited";
import AboutUsTSAFrameworks from "./AboutUsTSAFrameworks";

const AboutUsTSA = () => {
  return (
    <div className="hero h-fit bg-gradient-to-b from-purple-800 to-fuchsia-800 px-2">
      <div className="hero-content">
        <div className="md:max-w-5xl max-w-md">
          <h1 className="md:text-7xl text-5xl font-bold mt-8">
            About Us - TSA
          </h1>
          <div className="md:gap-10 md:items-start md:mt-10">
            <div className="py-5">
              <h1 className="font-bold text-4xl">Works Cited</h1>
              <div className="md:text-2xl text-md py-2 leading-loose">
                <AboutUsTSAWorksCited />
              </div>
            </div>
            <div className="py-5">
              <h1 className="font-bold text-4xl">Media Citations</h1>
              <div className="md:text-2xl text-md py-2 leading-loose">
                <p className="my-5">
                  All pictures and icons used in this website are copyright free
                  and/or under public domain. Icons were provided by Heroicons.
                </p>
                <p className="my-5">
                  "Heroicons." Heroicons, www.heroicons.com/
                </p>
              </div>
            </div>
            <div className="py-5">
              <h1 className="font-bold text-4xl">Frameworks</h1>
              <div className="md:text-2xl text-md py-2 leading-loose">
                <AboutUsTSAFrameworks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTSA;
