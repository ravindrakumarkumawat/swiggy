import React from 'react'
import Image1 from "../images/image1.jpg"

const Home = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly bg-yellow-300 h-85 px-14 max-h-1200 min-h-1200">
        <img src={Image1} className="h-72 w-72 p-7" alt="image1"/>
        <img src={Image1} className="h-72 w-72 p-7" alt="image1"/>
        <img src={Image1} className="h-72 w-72 p-7" alt="image1"/>
        <img src={Image1} className="h-72 w-72 p-7" alt="image1"/>
      </div>
    </div>
  )
}

export default Home
