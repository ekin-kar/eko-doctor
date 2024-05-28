import React from "react";

const Header2 = ({ children, className }) => {
  return (
    <h2
      className={`mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default Header2;
