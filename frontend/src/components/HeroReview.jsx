import React from "react";

const HeroReview = ({ reviews }) => {
  return (
    <>
      <div className="hero h-fit bg-base-200 px-2">
        <div className="hero-content text-center">
          <div className="max-w-screen-lg">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                {/* <div className="my-4 px-4 w-1/3"> */}
                  <div className="grid md:grid-cols-3 grid-rows-3 md:grid-rows-none items-center justify-items-stretch gap-10">
                    {reviews.map((r) => r)}
                  </div>
                {/* </div> */}
              </div>
            </div>
            {/* <h1 className="md:text-7xl text-5xl font-bold mt-5">
              Hear what other's have to say
            </h1>
            <div
              className={`grid grid-cols-${reviews.length} gap-4 place-items-start mt-10`}
            >
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroReview;
