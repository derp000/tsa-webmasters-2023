import { React, useRef, useEffect, useState } from "react";

import Globe from "react-globe.gl";

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const GlobeArcPoints = ({
  width,
  height,
  startPos,
  arcsData,
  gData,
  manageClick,
  // handleClick,
}) => {
  const globeEl = useRef();

  useEffect(() => {
    console.log(globeEl.current);
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.pointOfView(startPos);
  }, []);

  // jank way to work around react-globe.gl htmlElement wonkiness
  function handleClick(location) {
    console.log("=================name");
    console.log(location);
    manageClick(location);
    console.log("sent to manageclick");
  }

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
        htmlElement={(location) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = "lightblue";
          el.style.width = `20px`;
          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => handleClick(location);
          return el;
        }}
        width={width}
        height={height}
        animateIn={true}
      />
    </div>
  );
};

export default GlobeArcPoints;
