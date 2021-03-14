import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-500 text-white h-16">
      <div className="flex">
        <Link className="" to="/partner-restaurant">
          <div>logo</div>
        </Link>
        <Link className="" to="/search">
          <div className="flex">
            <input type="text" className="" placeholder="Search item"/>
            <svg className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex">
        <Link className="" to="/account">
          <div>Account</div>
        </Link>
        <Link className="" to="/notifications">
          <div>Notificaion</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
