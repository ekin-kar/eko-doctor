import React from "react";

const Header2 = ({ children, className }) => {
  return (
    <h2
      className={`mb-4 text-base sm:text-lg md:text-xl lg:text-3xl font-medium ${className}`}
    >
      {children}
    </h2>
  );
};

export default Header2;
