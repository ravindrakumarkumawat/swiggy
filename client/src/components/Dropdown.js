import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/search" className="p-4">
        Search
      </Link>
      <Link to="/offers/restaurant" className="p-4">
        Offers
      </Link>
      <Link to="/support" className="p-4">
        Help
      </Link>
      <Link to="/my-account" className="p-4">
        Ravindra
      </Link>
      <Link to="/checkout" className="p-4">
        Cart
      </Link>
    </div>
  );
};

export default Dropdown;
