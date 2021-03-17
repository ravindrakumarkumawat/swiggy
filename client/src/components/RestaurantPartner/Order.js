import React, { useState } from "react";

const OrderHeader = () => {
  return (
    <div className="my-12 flex items-center text-gray-500 text-sm">
      <div>
        <div className="flex items-center">
          <div className="text-gray-700 text-xl font-bold">Healthy Salad</div>
          <div className="mx-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex my-3">
          <div className="flex items-center">
            <div>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div className="mx-2">Main Street no. 12</div>
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>Verified Account</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mx-16">
        <div className="bg-blue-400 h-12 w-12 rounded-2xl mx-2">
          <svg
            className="h-6 w-6 text-white m-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
        <div>
          <div>Food Delivered</div>
          <div className="text-gray-700 text-xl font-bold">26.450</div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-green-400 h-12 w-12 rounded-2xl mx-2">
          <svg
            className="h-6 w-6 text-white m-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div>
          <div>Satisfaction Rating</div>
          <div className="text-gray-700 text-xl font-bold">95%</div>
        </div>
      </div>

      <div className="flex items-center mx-16">
        <div className="bg-yellow-400 h-12 w-12 rounded-2xl mx-2">
          <svg
            className="h-6 w-6 text-white m-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div className="flex items-center">
            <div className="text-gray-500 text-sm">Your Balance</div>
            <div className="mx-2">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
          </div>
          <div className="text-gray-700 text-xl font-bold">IDR 2.560.800</div>
        </div>
      </div>
    </div>
  );
};

const DataTable = ({ tableHeader, orderList }) => {
  return (
    <table className="w-full text-left text-gray-500 my-6">
      <tr className="h-16 border-b-2 border-gray-100 py-2 text-sm">
        {tableHeader.map((data) => (
          <th className="" key={data}>
            {data}
          </th>
        ))}
      </tr>
      {orderList.map((order) => (
        <tr className="h-16 border-b-2 border-gray-100 text-sm">
          <td className="flex items-center py-4">
            <div>
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mx-2">Jonathan Hope</div>
          </td>
          <td>
            <div>Main Street no.14</div>
            <div className="text-gray-400">3km</div>
          </td>
          <td>
            <div>Fresh Salad Bawl (2)</div>
            <div className="text-gray-400">IDR 254.000</div>
          </td>
          <td>
            <div className="ring-1 ring-pink-300 rounded-full text-center bg-pink-100 p-1 text-pink-600">
              Preparing
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
};

const OrderTable = ({ orderSelected }) => {
  const tableHeader = ["Customer", "Address", "Menu", "Status"];
  const orderList = [
    "Customer",
    "Address",
    "Menu",
    "Status",
    "Customer",
    "Address",
    "Menu",
    "Status",
  ];

  return (
    <div className={`${orderSelected ? "w-2/3" : "w-full"} my-12`}>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="text-gray-700 text-xl font-bold">Food Order</div>
        <button className="flex ring-1 ring-gray-300 shadow-md rounded-md p-2 mx-6 font-medium tracking-wide">
          <div>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>Filter Order</div>
        </button>
      </div>
      <DataTable tableHeader={tableHeader} orderList={orderList} />
    </div>
  );
};

const OrderDetail = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState("Items")
  return (
    <div className="w-1/3 border-green-400 bg-green-50">
      <div className="text-gray-700 text-xl font-bold py-10 px-10">
        Detail Order
      </div>
      <div className="px-10 flex justify-between items-center text-gray-400 text-sm">
        {tabs.map((tab) => (
          <div
            className={`${
              tab === selectedTab
                ? "border-b-2 border-green-500 text-gray-500 font-semibold"
                : ""
            } cursor-pointer`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="p-10">
      {(() => {
        switch (selectedTab) {
          case 'Review':
            return "This is review"
          case 'Progress':
            return "This is progress"
          default:
            return "This items"
        }
      })()}
      </div>
    </div>
  );
};

const Order = () => {
  const orderSelected = true;
  const TABS = ["Items", "Progress", "Review"];
  return (
    <div className="">
      <OrderHeader />
      <div className="border-t-2 border-gray-200"></div>
      <div className="flex">
        <OrderTable orderSelected={orderSelected} />
        {orderSelected && <OrderDetail tabs={TABS} />}
      </div>
    </div>
  );
};

export default Order;
