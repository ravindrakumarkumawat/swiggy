import React from "react";
import Slider from '../components/Customer/Slider'
import SideNavbar from "../components/Customer/SideNavbar"
import SideNavbarMenu from "../components/Customer/SideNavbarMenu"

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
