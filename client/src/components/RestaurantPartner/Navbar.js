import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-500 text-white h-16">
      <div className="flex mx-12 w-1/2">
        <Link className="" to="/partner-restaurant">
          <div className="text-white text-xl font-bold">logo</div>
        </Link>
        <Link className="mx-24" to="/search">
          <div className="flex w-96 justify-between bg-green-400 rounded-2xl p-1">
            <input
              type="text"
              className="bg-transparent outline-none mx-3 text-white placeholder-white"
              placeholder="Search item..."
            />
            <svg
              className="w-6 h-6 mx-3"
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
      <div className="flex w-1/2 justify-end mx-12">
        <Link className="mx-12 flex items-center" to="/account">
          <div className="mx-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-sm">ravindra</div>
          <div className="mx-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
        <Link className="" to="/notifications">
          <div>
            <svg
              className="text-white h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
