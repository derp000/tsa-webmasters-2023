import React from "react";

const ReviewCard = ({review, name}) => {
  return (
    <div className="box-border h-fit w-64 p-4 border-[10px] rounded-3xl border-orange-300 bg-orange-400 text-primary-content">
      <div className="card-compact grow">
        {/* <h2 className="card-title">Card title!</h2> */}
        <p className="text-2xl italic text-left">Lorem ipsum bla bla bla. It was the best time of my life!</p>
        <p className="text-right">- Alicia Bob</p>
      </div>
    </div>
  );
};

export default ReviewCard;
