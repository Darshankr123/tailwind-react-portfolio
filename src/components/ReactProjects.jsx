import React from "react";
import projects from "../reactProjects";
import SectionTitle from "./SectionTitle";

const ReactProjects = () => {
  return (
    <section className="section-center">
      <SectionTitle title="React Projects" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 py-16 gap-12">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-emerald-600 rounded-md duration-300 hover:scale-105 hover:shadow-slate-900"
            >
              <a href={project.url} target="_blank">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-60 rounded-tl-md rounded-tr-md object-cover"
                />
                <h4 className="text-xl text-center capitalize py-2 text-slate-100 font-medium tracking-wide">
                  {project.name} Project
                </h4>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReactProjects;
