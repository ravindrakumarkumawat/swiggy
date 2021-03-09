import React from "react";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly bg-yellow-300 h-85 max-h-1200 min-h-1200">
        <img src={Image1} className="h-64 w-64 m-6" alt="image1" />
        <img src={Image2} className="h-64 w-64 m-6" alt="image2" />
        <img src={Image3} className="h-64 w-64 m-6" alt="image3" />
        <img src={Image4} className="h-64 w-64 m-6" alt="image4" />
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-white border-2 w-64 shadow-md mx-12 py-7 cursor-pointer">
          <div className="flex flex-row p-3 hover:bg-yellow-500 text-yellow-500 hover:text-white">
            <div>
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="">
              <h1 className="font-bold">Top Picks</h1>
              <p className="font-light text-xs">122 OPTIONS</p>
            </div>
          </div>
          <div className="flex flex-row p-3 hover:bg-yellow-500 text-yellow-500 hover:text-white">
            <div>
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-bold">Whats New</h1>
              <p className="font-light text-xs">122 OPTIONS</p>
            </div>
          </div>
          <div className="flex flex-row p-3 hover:bg-yellow-500 text-yellow-500 hover:text-white">
            <div>
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold">Premium</h1>
              <p className="font-light text-xs">122 OPTIONS</p>
            </div>
          </div>
          <div className="flex flex-row p-3 hover:bg-yellow-500 text-yellow-500 hover:text-white">
            <div>
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-bold">Only On Swiggy</h1>
              <p className="font-light text-xs">122 OPTIONS</p>
            </div>
          </div>
          <div className="flex flex-row p-3 hover:bg-yellow-500 text-yellow-500 hover:text-white">
            <div>
              <svg
                className="h-12 w-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-bold">See All</h1>
              <p className="font-light text-xs">122 OPTIONS</p>
            </div>
          </div>
        </div>
        <div>Something to load</div>
      </div>
    </>
  );
};

export default Home;
