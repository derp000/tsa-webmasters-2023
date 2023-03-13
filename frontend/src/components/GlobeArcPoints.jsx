import { React, useRef, useEffect, useState } from "react";

import Globe from "react-globe.gl";

const canyon = { lat: -13.9, lng: -59.2 };
const fossae = { lat: -3.2, lng: -163 };
const mons = { lat: 18.65, lng: 226.2 };

const arcsData = [
  {
    startLat: canyon["lat"],
    startLng: canyon["lng"],
    endLat: fossae["lat"],
    endLng: fossae["lng"],
  },
  {
    startLat: fossae["lat"],
    startLng: fossae["lng"],
    endLat: mons["lat"],
    endLng: mons["lng"],
  },
{
    startLat: mons["lat"],
    startLng: mons["lng"],
    endLat: canyon["lat"],
    endLng: canyon["lng"],
  },
];
console.log(arcsData);

const GlobeArcPoints = ({ width, height, startPos }) => {
  const globeEl = useRef();

  useEffect(() => {
    console.log(globeEl.current);
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.pointOfView(startPos);
  }, []);

  return (
    <div>
      <Globe
        ref={globeEl}
        globeImageUrl="/src/assets/mars_uv.jpg"
        arcsData={arcsData}
        // arcColor={"color"}
        arcDashLength={() => 0.8}
        arcDashGap={() => 0.1}
        arcDashAnimateTime={() => 1500}
        // atmosphereColor={"purple"}
        atmosphereAltitude={0.25}
        width={width}
        height={height}
        animateIn={true}
        // className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default GlobeArcPoints;
