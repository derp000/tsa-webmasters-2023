import React from "react";
import Label from "./Label";

const Form = ({ formContent }) => {
  return (
    <div
      className="hero bg-cover"
      style={{ backgroundImage: `url(images/constellation.jpg)` }}
    >
      <div className="form-control w-full max-w-lg">
        {formContent.map((label) => (
          <Label
            prompt={label.prompt}
            extra={label.extra}
            key={label.key}
            handleKeyPress={label.handleChange}
            // warning={label.handleKeyPress}
          />
        ))}
        {/* <Label prompt={"Enter your name"} />
        <Label prompt={"Enter your email"} />
        <Label
          prompt={"Enter your phone number"}
          extra={
            "If you're outside the US/Canada, please include your country's calling code!"
          }
        /> */}
      </div>
    </div>
  );
};

export default Form;
