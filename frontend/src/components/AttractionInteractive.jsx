import React, { useEffect, useRef, useState } from "react";
import MarsGlobeArc from "./MarsGlobeArc";

const AttractionInteractive = ({ title, body, interactive }) => {
  const divSizeRef = useRef(null);

  // doesnt work just ignore
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
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
  }, [divSizeRef.current]);

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
          <MarsGlobeArc
            width={dimensions["width"]}
            height={dimensions["height"]}
            className="inline"
          />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 bg-orange-200 text-black">Words</div>
        </div>
      </div>
    </>
  );
};

export default AttractionInteractive;
