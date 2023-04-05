import { React, useRef, useEffect, useState } from "react";

import Globe from "react-globe.gl";

const GlobeRandomArcs = ({ width, height, startPos }) => {
  const globeEl = useRef();

  useEffect(() => {
    console.log(globeEl.current);
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.pointOfView(startPos);
  }, []);

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["#c17df5", "#7da5f5", "#f57d9b", "#f5df7d"][
        Math.round(Math.random() * 3)
      ],
      ["#c17df5", "#7da5f5", "#f57d9b", "#f5df7d"][
        Math.round(Math.random() * 3)
      ],
    ],
  }));
  console.log(arcsData);

  return (
    <div>
      <Globe
        ref={globeEl}
        globeImageUrl="/src/assets/mars_uv.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 5000 + 2000}
        atmosphereColor={"purple"}
        atmosphereAltitude={0.25}
        width={width}
        height={height}
        animateIn={true}
        // className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default GlobeRandomArcs;
