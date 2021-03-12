import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const SideNavbarMenu = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/restaurants/60387fbc49362c18f0363724/items')
      .then((response) => response.json())
      .then(res => { 
        // console.log(res)
        setItems(res)
      })
  }, [])

  return (
    <div className="mx-5 my-16 border-b-2 border-dashed">
      <div className="">
        <div className="font-semibold text-3xl text-gray-900">Top Picks</div>
        <div className="grid grid-cols-3 py-12 gap-8">
        {
          items.map((item) => <MenuItem  key={item._id} item={item} />)
        }        
        </div>
      </div>      
    </div>
  );
};

export default SideNavbarMenu;
