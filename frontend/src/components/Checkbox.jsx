import React from "react";

const Checkbox = ({ textElem }) => {
  return (
    <div className="inline-flex items-center">
      <input type="checkbox" checked className="checkbox checkbox-lg mr-10" />
      <div className="text-left py-6 lg:text-2xl text-2xl md:max-w-5xl lg:leading-loose leading-loose">
        {textElem}
      </div>
    </div>
  );
};

export default Checkbox;
