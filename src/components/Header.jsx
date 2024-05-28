import Link from "next/link";
import React from "react";
import { FaBrain } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full border-b border-gray-200 h-20">
      <div className="max-w-5xl h-full m-auto flex items-center justify-between p-3">
        <div className="hidden sm:flex">
          <Link
            href="/"
            className="font-bold text-orange-900 flex items-center gap-2"
          >
            <FaBrain className="text-orange-900" size={45} />
            <p className="text-4xl">EkoDoctor</p>
          </Link>
        </div>
        <div className="flex gap-4 font-semibold text-orange-800 hover:text-orange-700 text-lg">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
