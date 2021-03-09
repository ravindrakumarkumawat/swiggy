import React from "react";
import Image1 from "../images/image1.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly bg-yellow-300 h-85 max-h-1200 min-h-1200">
        <img src={Image1} className="h-64 w-64 m-6" alt="image1" />
        <img src={Image1} className="h-64 w-64 m-6" alt="image1" />
        <img src={Image1} className="h-64 w-64 m-6" alt="image1" />
        <img src={Image1} className="h-64 w-64 m-6" alt="image1" />
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-white border-2 w-64 shadow-md mx-12">
          <div>
            <div>Icons</div>
            <div>
              <h1>Top Picks</h1>
              <p>122 OPTIONS</p>
            </div>
          </div>
          <div>
            <div>Icons</div>
            <div>
              <h1>Premium</h1>
              <p>122 OPTIONS</p>
            </div>
          </div>
          <div>
            <div>Icons</div>
            <div>
              <h1>Only On Swiggy</h1>
              <p>122 OPTIONS</p>
            </div>
          </div>
          <div>
            <div>Icons</div>
            <div>
              <h1>Vegetarian Options</h1>
              <p>122 OPTIONS</p>
            </div>
          </div>
          <div>
            <div>Icons</div>
            <div>
              <h1>See All</h1>
              <p>122 OPTIONS</p>
            </div>
          </div>
        </div>
        <div>
        Something to load
        </div>
      </div>
    </>
  );
};

export default Home;
