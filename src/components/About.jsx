import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <div
      id="about"
      className="section-center grid gap-8 py-20 items-center sm:grid-cols-2"
    >
      <div>
        <img src={aboutImg} alt="about" className="w-full h-64" />
      </div>
      <div>
        <SectionTitle title="code and coffee" />
        <p className="tracking-wide pt-8 text-slate-700 leading-loose ">
          Seeking a challenging career with a progressive organization that
          provides an opportunity to capitalize my technical skills & abilities
          in the field of{" "}
          <span className="text-emerald-600 font-medium">web development</span>
        </p>
      </div>
    </div>
  );
};

export default About;
