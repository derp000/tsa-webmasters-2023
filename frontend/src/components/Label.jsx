import React from "react";

const Label = ({ prompt, extra, register, key }) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{prompt}</span>
      </label>
      <input
        // {...register({ key }, { required: true })}
        placeholder="Type here"
        className="input input-bordered input-lg w-full max-w-lg"
      />
      <label className="label">
        <span className="label-text-alt"></span>
        <span className="label-text-alt">{extra}</span>
      </label>
    </>
  );
};

export default Label;
