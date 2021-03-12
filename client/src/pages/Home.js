import React from "react";
import Slider from '../components/Slider'
import SideNavbar from "../components/SideNavbar"
import SideNavbarMenu from "../components/SideNavbarMenu"

const Home = () => {
  return (
    <>
      <Slider />
      <div className="flex">
        <SideNavbar />
        <SideNavbarMenu />
      </div>
    </>
  );
};

export default Home;
