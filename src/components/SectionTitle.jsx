import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="border-b-[2px] border-emerald-500 pb-5 ">
      <h3 className="text-3xl font-medium text-slate-500 tracking-wide capitalize">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
