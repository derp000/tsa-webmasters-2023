import React from "react";

const Label = ({ prompt, extra, handleChange }) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{prompt}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-lg"
        onChange={handleChange}
      />
      <label className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt">{extra}</span>
      </label>
    </>
  );
};

export default Label;
