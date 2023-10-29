import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { links } from "../data";

const Footer = () => {
  const date = new Date();
  return (
    <div className="py-16 w-full bg-emerald-300 flex justify-center items-center flex-col">
      <div className="flex gap-x-3   ">
        {links.map((item) => {
          return (
            <a
              className="capitalize tracking-wide  sm:font-medium hover:text-emerald-600 duration-300 pt-2"
              key={item.id}
              href={`${item.href}`}
            >
              {item.text}
            </a>
          );
        })}
      </div>
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
      <p>
        CopyRight &copy; &#x3c;&#x3c;&#x3c;Darshan K R&#x3e;&#x3e;&#x3e;
        {date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
