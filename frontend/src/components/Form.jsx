import React from "react";
import Label from "./Label";

const Form = ({ formContent, register, handleSubmit }) => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-lg">
          {formContent.map((label) => (
            <Label
              prompt={label.prompt}
              extra={label.extra}
              key={label.key}
              // handleKeyPress={label.handleChange}
              register={register}
              // warning={label.handleKeyPress}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
