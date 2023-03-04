import React from "react";

import Globe from "react-globe.gl";
// https://stackoverflow.com/questions/59982018/how-do-i-get-tailwinds-active-breakpoint-in-javascript

const TestingGlobe = ({ width, height }) => {
  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

  return (
    <div>
      <Globe
        width={512}
        height={512}
        className="max-w-sm rounded-lg shadow-2xl"
        animateIn={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
      />
    </div>
  );
};

export default TestingGlobe;
