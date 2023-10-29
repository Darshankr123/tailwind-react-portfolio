import React from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div
        className="section-center px-8 py-4 items-start 
      flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 "
      >
        <h2 className="text-3xl font-bold">
          I'm
          <span className="text-3xl pl-2 text-emerald-500">Darshan</span>
        </h2>
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
      </div>
    </nav>
  );
};

export default Navbar;
