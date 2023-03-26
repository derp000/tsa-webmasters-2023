import React, { useEffect, useRef, useState } from "react";
import GlobeArcPoints from "./GlobeArcPoints";
import { ArrowLeftCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const canyon = {
  lat: -13.9,
  lng: -59.2,
  name: "Valles Marineris Canyon",
  info: (
    <p>
      Valles Marineris is the largest canyon in the solar system, long enough to
      stretch from Los Angeles to New York City! See this one-of-kind canyon in
      our solar system, all 1,850 miles of it.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const fossae = {
  lat: -3.2,
  lng: -163,
  name: "Medusae Fossae",
  info: (
    <p>
      Medusae Fossae is a huge volcanic deposit, a fifth of the size of the
      United States! Some claim its origin came from hundreds of volcanic
      eruptions over 500 million years while others claim its origin is from a
      UFO crash. Either way, see this unforgettable marvel!
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const mons = {
  lat: 18.65,
  lng: 226.2,
  name: "Olympus Mons",
  info: (
    <p>
      Mars also has the tallest volcano in the solar system. Olympus Mons is the
      size of Arizona and three times taller than Mount Everest. Olympus Mons is
      even greater than its namesake, the legendary Grecian Mount Olympus!{" "}
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
const crater = {
  lat: -5.4,
  lng: 137.8,
  name: "Gale Crater",
  info: (
    <p>
      A decade ago, Curiosity found streambeds, complex organic molecules,
      changes of methane concentrations and other startling signs of life in
      this crater. Continue to search for signs of life in person at Gale
      Crater. This excursion is related to geology, biology, and biochemistry.
    </p>
  ),
  imgUrl: "/src/assets/HuntsvilleRocket.jfif",
};
// const mount = { lat: -5.08, lng: 137.85, name: "4thing", info: "d" };

const arcsData = [
  {
    startLat: canyon["lat"],
    startLng: canyon["lng"],
    endLat: mons["lat"],
    endLng: mons["lng"],
  },
  {
    startLat: mons["lat"],
    startLng: mons["lng"],
    endLat: crater["lat"],
    endLng: crater["lng"],
  },
  {
    startLat: crater["lat"],
    startLng: crater["lng"],
    endLat: fossae["lat"],
    endLng: fossae["lng"],
  },
  {
    startLat: fossae["lat"],
    startLng: fossae["lng"],
    endLat: canyon["lat"],
    endLng: canyon["lng"],
  },
];
console.log(arcsData);

const gData = [canyon, fossae, mons, crater];

const AttractionInteractive = ({ title, body, interactive }) => {
  const divSizeRef = useRef(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // slightly jank fix
  useEffect(() => {
    const reload = setInterval(() => {
      console.log(
        `width ${
          divSizeRef.current ? divSizeRef.current.offsetWidth : 0
        } length ${divSizeRef.current ? divSizeRef.current.offsetHeight : 0}`
      );
      if (divSizeRef.current) {
        setDimensions({
          width: divSizeRef.current.offsetWidth,
          height: divSizeRef.current.offsetHeight,
        });
      }
    }, 2000);

    return () => clearInterval(reload);
  }, [divSizeRef.current]);

  function manageClick(location) {
    console.log("manageclick receiving");
    console.log(location);
    setName(location.name);
    setInfo(location.info);
    setImgUrl(location.imgUrl);
    console.log("after output");
  }

  return (
    <>
      <div className="lg:drawer lg:drawer-mobile hidden">
        <input type="checkbox" className="drawer-toggle" />
        <div
          ref={divSizeRef}
          className="drawer-content flex flex-col items-center justify-center"
        >
          {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
          <GlobeArcPoints
            width={dimensions["width"]}
            height={dimensions["height"]}
            arcsData={arcsData}
            gData={gData}
            manageClick={manageClick}
            className="inline"
          />
        </div>
        <div className="drawer-side">
          <Link to="/Attractions" className="absolute ml-4 mt-4 h-7 w-7">
            <XCircleIcon className="fill-black" />
          </Link>
          <div className="menu max-w-2xl p-10 bg-orange-200 text-black leading-loose">
            <div className="text-4xl font-bold mt-5">{title}</div>
            <div className="text-xl mb-5">{body}</div>
            <div className="text-6xl font-bold">{name}</div>
            <div>{info}</div>
            <div>
              <img src={imgUrl} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">Hi</div>
    </>
  );
};

export default AttractionInteractive;
