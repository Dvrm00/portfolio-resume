import React from "react";

const Education = ({ title, month, year, desc }) => {
  return (
    <div className="top-item resume-item">
      <h2>{title}</h2>
      <span>
        {month}, {year}
      </span>
      <p>{desc}</p>
    </div>
  );
};

export default Education;
