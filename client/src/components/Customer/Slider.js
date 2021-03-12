import React from "react";
import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg";
import Image4 from "../../images/image4.jpg";

const Slider = () => {
  const images = [Image1, Image2, Image3, Image4];
  return (
    <div className="flex flex-row justify-evenly bg-yellow-300 h-85 max-h-1200 min-h-1200">
      {
        images.map((image) => <img src={image} className="h-64 w-64 m-6 cursor-pointer" alt="some description" />)
      }
    </div>
  );
};

export default Slider;
