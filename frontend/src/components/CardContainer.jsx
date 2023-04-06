import React from "react";

const CardContainer = ({ cards }) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> */}
        {/* AttractionCard */}
        {/* <div className="overflow-hidden rounded-lg shadow-lg"> */}
        {cards.map((c) => c)}
        {/* <img
              className="block h-auto w-full"
              src="public/images/HuntsvilleRocket.jfif"
            />
            <div className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">Title Lorem Here</h1>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CardContainer;
