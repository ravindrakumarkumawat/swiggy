import React from 'react'
import Food from "../images/food.jpg";

const MenuItem = () => {
  return (
    <div className="w-72 bg-white cursor-pointer border-2 border-white hover:border-gray-200 hover:shadow-md p-3.5">
            <div className="w-64 h-40">
              <img src={Food} alt="food1" />
            </div>
            <div className="my-3">
              <div className="text-gray-700 font-bold">Lunch Box</div>
              <div className="text-gray-500 font-md text-xs">
                North Indian, Desserts, Biryani
              </div>
            </div>
            <div className="flex justify-between my-3 text-gray-500 font-md text-xs">
              <div className="bg-green-500 text-white px-2">
                <span className="">*</span>
                <span>4.2</span>
              </div>
              <div>•</div>
              <div>29 MINS</div>
              <div>•</div>
              <div className="">₹200 FOR TWO</div>
            </div>
            <div className="border-t-2 text-sm text-red-700 py-2">
              <span className=""></span>
              <span className="">50% off | Use SWIGGYIT</span>
            </div>
            <div className="text-sm text-red-700 py-0">
              <span className=""></span>
              <span className="">Flat ₹30 Paytm Cashback</span>
            </div>
          </div>

  )
}

export default MenuItem
