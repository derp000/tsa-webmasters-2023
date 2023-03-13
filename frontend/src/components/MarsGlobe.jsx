import React from "react";

import Globe from "react-globe.gl";

const MarsGlobe = () => {
  return (
    <div>
      <Globe
        width={1024}
        height={1024}
        className="max-w-sm rounded-lg shadow-2xl"
        animateIn={true}
        globeImageUrl="/src/assets/mars_uv.jpg"
      />
    </div>
  );
};

export default MarsGlobe;
