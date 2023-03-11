import React from "react";

const HeroText = ({ heading, title, body, images, reverseAlign, heroEnd }) => {
  let bodyPadding = "";
  if (heading && title) {
    bodyPadding = "py-6";
  } else if (heroEnd) {
    bodyPadding = "mb-6";
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

  return (
    <div className="hero h-fit bg-base-200 px-2">
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
          <div
            className={`md:inline-flex md:gap-10 md:items-start ${
              heading && title ? "md:mt-10" : ""
            }`}
          >
            {reverseAlign
              ? heroBody.reverse().map((hero) => hero)
              : heroBody.map((hero) => hero)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
