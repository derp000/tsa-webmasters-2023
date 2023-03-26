import React from "react";
import { NavLink } from "react-router-dom";

const AttractionCard = ({ title, imgSrc, to, onContentClick }) => {
  const content = (
    <>
      <img
        className="object-contain h-auto w-full z-10 opacity-50"
        src={imgSrc}
      />
      <h1 className="absolute w-full px-5 text-white font-extrabold text-5xl text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {title}
      </h1>
    </>
  );

  if (to) {
    content = <NavLink>{content}</NavLink>;
  }

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        onClick={onContentClick}
      >
        {content}
        {/* <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        </div> */}
      </div>
    </div>
  );
};

export default AttractionCard;
