import React from "react";

const Form = () => {
  return (
    <div className="hero">
      <div className="form-control w-full max-w-lg">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-lg"
        />
        <label className="label">
          <span className="label-text-alt"></span>
          <span className="label-text-alt">Bottom Right label</span>
        </label>
      </div>
    </div>
  );
};

export default Form;
