import { React, useEffect, useState } from "react";

const HeroText = ({
  heading,
  title,
  body,
  images,
  reverseAlign,
  multiHero,
  bgLink,
}) => {
  // single hero case
  let bodyPadding = "py-6";
  if (multiHero) {
    if (heading && title) {
      bodyPadding = "mt-6";
    } else {
      bodyPadding = "mb-6 lg:mt-0 mt-6";
    }
  }

  const heroBodyText = (
    <div
      className={`text-left lg:text-2xl text-2xl md:max-w-md lg:leading-loose leading-loose ${bodyPadding}`}
      key="main_text"
    >
      {body}
    </div>
  );

  let heroImages;
  if (!images) {
    heroImages = <></>;
  } else {
    heroImages =
      images.length > 1 ? (
        <div
          className={`lg:contents sm:grid md:grid-cols-none sm:grid-cols-${
            images.length
          } place-items-center ${reverseAlign ? "md:mr-10" : "md:ml-10"}`}
          key="images"
        >
          {images?.map((img) => img)}
        </div>
      ) : (
        <div key="images">{images[0]}</div>
      );
  }

  const heroBody = [heroBodyText, heroImages];
  if (reverseAlign) {
    heroBody.reverse();
  }

  return (
    <div
      className={`hero h-fit bg-base-200 px-2 ${bgLink ? "bg-cover" : ""}`}
      style={bgLink ? { backgroundImage: bgLink } : {}}
    >
      <div
        className={`hero-content ${reverseAlign ? "text-right" : "text-left"} ${
          !heading && !title ? "py-0" : ""
        }`}
      >
        <div className="max-w-5xl">
          {heading && (
            <h6 className="md:text-2xl text-xl font-bold mt-10">{heading}</h6>
          )}
          {title && (
            <h1 className="md:text-7xl text-5xl font-bold mt-2">{title}</h1>
          )}
          {!title && (
            <div className="mt-4"></div>
          )}
          <div
            className={`md:inline-flex md:gap-10 md:items-start ${
              heading && title ? "md:mt-10" : ""
            }`}
          >
            {heroBody.map((hero) => hero)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
