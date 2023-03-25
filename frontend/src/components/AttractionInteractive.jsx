import React, { useLayoutEffect, useRef, useState } from "react";
import GlobeArcPoints from "./GlobeArcPoints";

const AttractionInteractive = ({ title, body, interactive }) => {
  const divSizeRef = useRef(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // slightly jank fix
  useLayoutEffect(() => {
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
    }, 1000);

    return () => clearInterval(reload);
  }, [divSizeRef.current]);

  return (
    <>
      <div className="drawer drawer-mobile">
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
