import React from "react";
import MenuItem from "./MenuItem";

const SideNavbarMenu = () => {
  return (
    <div className="mx-5 my-16 border-b-2 border-dashed">
      <div className="">
        <div className="font-semibold text-3xl text-gray-900">Top Picks</div>
        <div className="grid grid-cols-3 py-12 gap-8">
          <MenuItem />          
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem />         
        </div>
      </div>
      <div className="">
        <div className="font-semibold text-3xl text-gray-900">Top Picks</div>
        <div className="grid grid-cols-3 py-12 gap-8">
          <MenuItem />          
          <MenuItem /> 
          <MenuItem /> 
          <MenuItem />         
        </div>
      </div>
    </div>
  );
};

export default SideNavbarMenu;
