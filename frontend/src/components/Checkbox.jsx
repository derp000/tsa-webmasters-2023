import React from "react";

const Checkbox = ({ text }) => {
  return (
    <div className="md:inline-flex md:items-center">
      <input type="checkbox" checked className="checkbox checkbox-lg mr-10" />
      <p className="text-left py-6 lg:text-2xl text-2xl md:max-w-5xl lg:leading-loose leading-loose">
        {text}
      </p>
    </div>
  );
};

export default Checkbox;
