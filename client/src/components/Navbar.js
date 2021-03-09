import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-20 bg-white font-semibold shadow-md font-arial" role="navigation">
      <Link to="/" className="pl-16">
        logo
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-16 md:block hidden">
        <Link to="/search" className="p-4 text-gray-500 hover:text-green-500">Search</Link>
        <Link to="/offers/restaurant" className="p-4 text-gray-500 hover:text-green-500">Offers</Link>
        <Link to="/support" className="p-4 text-gray-500 hover:text-green-500">Help</Link>
        <Link to="/my-account" className="p-4 text-gray-500 hover:text-green-500">Ravindra</Link>
        <Link to="/checkout" className="p-4 text-gray-500 hover:text-green-500">Cart</Link>      
      </div>
    </nav>
  );
};

export default Navbar;
