import React from "react";
import { FaBrain } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-200 bg-white py-6">
      <div className="max-w-5xl m-auto flex flex-col sm:flex-row items-center justify-between p-3">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <FaBrain
            className="text-second-color hover:text-first-color transition-colors duration-500"
            size={30}
          />
          <p className="font-bold text-second-color text-xl">EkoDoctor</p>
        </div>
        <div className="text-center text-sm text-gray-500">
          © 2024 EkoDoctor. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
