import React from "react";
import { FaFacebook, FaTwitter, FaGooglePlus } from "react-icons/fa";

const socialIcons = [
  { component: <FaFacebook />, name: "Facebook" },
  { component: <FaTwitter />, name: "Twitter" },
  { component: <FaGooglePlus />, name: "GooglePlus" },
];

const HeaderIcons = () => (
  <div className="flex gap-5 text-second-color">
    {socialIcons.map((icon, index) => (
      <span
        key={index}
        className="hover:text-first-color cursor-pointer transition-colors duration-500"
        aria-label={icon.name}
      >
        {icon.component}
      </span>
    ))}
  </div>
);

export default HeaderIcons;
