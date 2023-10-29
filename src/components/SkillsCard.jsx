import React from "react";

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      <span className="pb-2 block">{icon}</span>
      <h3 className="font-bold tracking-wider pb-2">{title}</h3>
      <p className="tracking-wide">{text}</p>
    </article>
  );
};

export default SkillsCard;
