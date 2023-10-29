import React from "react";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute  w-full h-full bg-emerald-200 rotate-45 overflow-hidden text-slate-100 ">
        <div className=""></div>
      </div>
      <article
        className="section-center px-8 py-20 relative text-slate-700 "
        id="skills"
      >
        <SectionTitle title="Tech Stack" />
        <article className="grid py-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </article>
      </article>
    </section>
  );
};

export default Skills;
