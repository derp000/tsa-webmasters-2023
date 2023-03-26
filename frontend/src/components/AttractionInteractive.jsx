import React, { useEffect, useRef, useState } from "react";
import GlobeArcPoints from "./GlobeArcPoints";

const canyon = {
  lat: -13.9,
  lng: -59.2,
  name: "thingy",
  info: "a",
  imgUrl: "",
};
const fossae = { lat: -3.2, lng: -163, name: "2thing", info: "b" };
const mons = { lat: 18.65, lng: 226.2, name: "3thing", info: "c" };
// const crater = { lat: -5.4, lng: 137.8 };
const mount = { lat: -5.08, lng: 137.85, name: "4thing", info: "d" };

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
    endLat: mount["lat"],
    endLng: mount["lng"],
  },
  {
    startLat: mount["lat"],
    startLng: mount["lng"],
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

const gData = [canyon, fossae, mons, mount];

const AttractionInteractive = ({ title, body, interactive }) => {
  const divSizeRef = useRef(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

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
          <div className="menu p-10 bg-orange-200 text-black leading-loose">
            <div className="text-4xl font-bold">{title}</div>
            <div className="text-xl">{body}</div>
            <div className="text-6xl font-bold">{name}</div>
            <div>{info}</div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">Hi</div>
    </>
  );
};

export default AttractionInteractive;
