import React from "react";
import Checklist from "./Checklist";
import HeroImage from "./HeroImage";

const criteria = [
  <p>
    In an effort to make astronaut training and space more accessible, Helios
    accepts astronaut applications from any UN recognized country or territory!
  </p>,
  <p>Pass ACTFL English fluency exam</p>,
  <p>
    Mental exam (includes an MSE, mental status exam, MBTI, Myer-Briggs
    personality exam) and personal interviews
  </p>,
  <p>
    Physical exam (distal and near eyesight correctable to
    20/20 in each eye, blood pressure not exeeding 140/90 when sitting) and a
    medical screening  </p>,
  // might get rid of this one
  <p>
    A doctorate degree from an accredited university or equivalent experience in
    natural sciences, medicine, or engineering<sup>*</sup>
  </p>,
  <p>
    Teaching K-12 is considered equivalent for an astronaut candidate; educators
    are encouraged to apply!
  </p>,
];

const disclaimer = (
  <p className="text-left py-6 lg:text-sm text-md md:max-w-5xl lg:leading-loose leading-loose text italic">
    <sup>*</sup>Suggested; Does not include psychology, nursing, social
    sciences, technology, or aviation technology. For further information about
    qualifying degrees contact us in the contact information page.
  </p>
);

const Eligibility = () => {
  return (
    <>
      <HeroImage callToAction={"Ready for an out-of-this-world experience?"} />
      <Checklist criteria={criteria} disclaimer={disclaimer} />
    </>
  );
};

export default Eligibility;
