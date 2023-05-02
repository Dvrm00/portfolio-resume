import React from "react";
import {
  TfiFacebook,
  TfiTwitterAlt,
  TfiYoutube,
  TfiLinkedin,
  TfiGithub,
} from "react-icons/tfi";
import "./social-icons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="#">
            <TfiFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <TfiTwitterAlt />
          </a>
        </li>
        <li>
          <a href="#">
            <TfiYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/">
            <TfiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Dvrm00">
            <TfiGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
