import React from "react";

const ReviewCard = ({review, name}) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        {/* <h2 className="card-title">Card title!</h2> */}
        <p className="text-2xl italic">I had a blast. It was the best time of my life!</p>
        <p className="text-right">- Alicia Bob</p>
      </div>
    </div>
  );
};

export default ReviewCard;
