import React from "react";
import { FaFacebook, FaTwitter, FaGooglePlus } from "react-icons/fa";

const socialIcons = [
  { component: <FaFacebook />, name: "Facebook" },
  { component: <FaTwitter />, name: "Twitter" },
  { component: <FaGooglePlus />, name: "GooglePlus" },
];

const HeaderIcons = () => (
  <div className="flex gap-5 text-orange-800">
    {socialIcons.map((icon, index) => (
      <span
        key={index}
        className="hover:text-orange-600 cursor-pointer"
        aria-label={icon.name}
      >
        {icon.component}
      </span>
    ))}
  </div>
);

export default HeaderIcons;
