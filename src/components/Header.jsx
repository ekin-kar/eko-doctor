import Link from "next/link";
import React from "react";
import { FaBrain } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full border-b border-gray-200 h-20 sticky top-0 bg-white z-20">
      <div className="max-w-5xl h-full m-auto flex items-center justify-between p-3">
        <div className="hidden sm:flex">
          <Link
            href="/"
            className="font-bold text-second-color flex items-center gap-2 transition-colors duration-500"
          >
            <FaBrain
              className="text-second-color hover:text-first-color transition-colors duration-500"
              size={45}
            />
            <p className="text-4xl">EkoDoctor</p>
          </Link>
        </div>
        <div className="flex gap-4 font-semibold text-first-color text-lg">
          <Link
            className="hover:text-second-color transition-colors duration-500"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="hover:text-second-color transition-colors duration-500"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="hover:text-second-color transition-colors duration-500"
            href="/"
          >
            SERVICES
          </Link>
          <Link
            className="hover:text-second-color transition-colors duration-500"
            href="/contact"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
