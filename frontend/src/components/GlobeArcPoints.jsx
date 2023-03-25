import { React, useRef, useEffect, useState } from "react";

import Globe from "react-globe.gl";

const canyon = { lat: -13.9, lng: -59.2 };
const fossae = { lat: -3.2, lng: -163 };
const mons = { lat: 18.65, lng: 226.2 };
const crater = { lat: -5.4, lng: 137.8 };
const mount = { lat: -5.08, lng: 137.85 };

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

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

// const N = 30;
// const gData = [...Array(N).keys()].map(() => ({
//   lat: (Math.random() - 0.5) * 180,
//   lng: (Math.random() - 0.5) * 360,
//   size: 7 + Math.random() * 30,
//   color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
// }));

const gData = [canyon, fossae, mons, crater, mount];

console.log(gData);

const GlobeArcPoints = ({ width, height, startPos, handleClick }) => {
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
        htmlElementsData={gData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = "lightblue";
          el.style.width = `20px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = handleClick;
          return el;
        }}
        width={width}
        height={height}
        animateIn={true}
        // className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default GlobeArcPoints;
