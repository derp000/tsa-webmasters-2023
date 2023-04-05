import React, { useEffect, useRef, useState } from "react";
import GlobeWithPoints from "./GlobeWithPoints";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import AttractionNoninteractive from "./AttractionNoninteractive";

const AttractionInteractive = ({
  title,
  body,
  arcsData,
  gData,
  startPos,
  globeImg,
  arcColor,
  atmosphereColor,
  markerColor,
  drawerStyle,
}) => {
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
          <GlobeWithPoints
            width={dimensions["width"]}
            height={dimensions["height"]}
            arcsData={arcsData}
            gData={gData}
            // startPos={{ lat: 0, lng: 250, altitude: 3.0 }}
            startPos={startPos}
            manageClick={manageClick}
            globeImg={globeImg}
            arcColor={arcColor}
            atmosphereColor={atmosphereColor}
            markerColor={markerColor}
            className="inline"
          />
        </div>
        <div className="drawer-side">
          <Link to="/Attractions" className="absolute ml-4 mt-4 h-7 w-7">
            <XCircleIcon className="fill-white" />
          </Link>
          <div
            className={`menu max-w-2xl p-10 text-white leading-loose ${drawerStyle}`}
          >
            <div className="text-4xl font-bold my-5">{title}</div>
            <div className="text-3xl mb-5">{body}</div>
            <div className="text-6xl font-bold mb-5">{name}</div>
            <div className="text-2xl mb-5">{info}</div>
            <div>
              <img src={imgUrl} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <AttractionNoninteractive gData={gData} />
      </div>
    </>
  );
};

export default AttractionInteractive;
