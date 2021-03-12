import React from 'react'
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";

const Slider = () => {
  return (
    <div className="flex flex-row justify-evenly bg-yellow-300 h-85 max-h-1200 min-h-1200">
    <img
      src={Image1}
      className="h-64 w-64 m-6 cursor-pointer"
      alt="image1"
    />
    <img
      src={Image2}
      className="h-64 w-64 m-6 cursor-pointer"
      alt="image2"
    />
    <img
      src={Image3}
      className="h-64 w-64 m-6 cursor-pointer"
      alt="image3"
    />
    <img
      src={Image4}
      className="h-64 w-64 m-6 cursor-pointer"
      alt="image4"
    />
  </div>
  )
}

export default Slider
