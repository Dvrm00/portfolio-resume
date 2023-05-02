import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hello, My name is Devrim ŞAHİN. As a frontend developer, i have
        experience in building responsive and user-friendly web applications
        using HTML, CSS, and JavaScript. I have experience working extensively
        with APIs to integrate backend functionality into web applications. I'm
        proficient in several frameworks and libraries including React
        JS,Next.js, Redux Toolkit, React Router Dom, and Axios. Have experience
        using Jira to manage the development process. With a strong work ethic
        and a passion for coding,I'm always keen on to learn new skills
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> January 08 1990
        </li>
        <li>
          <strong>Location:</strong> Mersin, Turkey
        </li>
        <li>
          <strong>Email:</strong> devrimmsahinn1@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +5435030571
        </li>
      </ul>
    </div>
  );
};

export default Intro;
