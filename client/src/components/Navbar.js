import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link to="/" className="pl-8">
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
      <div className="pr-8 md:block hidden">
        <Link to="/search" className="p-4">Search</Link>
        <Link to="/offers/restaurant" className="p-4">Offers</Link>
        <Link to="/support" className="p-4">Help</Link>
        <Link to="/my-account" className="p-4">Ravindra</Link>
        <Link to="/checkout" className="p-4">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
