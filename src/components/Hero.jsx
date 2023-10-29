import React from "react";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-emerald-100 py-24 
    "
    >
      <div className="px-8 section-center grid  md:grid-cols-2 md:items-center gap-8">
        <article>
          <h1 className="text-7xl px-8tracking-wider font-bold pb-4">
            I'm Darshan
          </h1>
          <p className="text-3xl tracking-wide capitalize text-slate-700 pb-2">
            Front-End Developer
          </p>
          <p className="text-lg text-slate-600 capitalize tracking-wide">
            Turning ideas into Interactive Reality
          </p>
          <div className="flex py-2 space-x-2">
            <a href="https://github.com/Darshankr123" target="_blank">
              <FaGithubSquare className="text-2xl text-slate-700 hover:text-emerald-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-k-r-581220230/"
              target="_blank"
            >
              <FaLinkedin
                className="text-2xl
              text-slate-700 hover:text-emerald-700"
              />
            </a>
            <a href="https://twitter.com/Darshan86190462" target="_blank">
              <FaTwitterSquare className="text-2xl  text-slate-700 hover:text-emerald-700" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="profile" className="h-80 lg:h-92" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
