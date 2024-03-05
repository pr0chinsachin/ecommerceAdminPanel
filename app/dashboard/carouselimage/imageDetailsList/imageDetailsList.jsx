"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";

const userData = {
  // Define the structure of your user data
  id: "1",
  imageName: "ABC",
};

const ImageDetailsList = () => {
  //   debugger;
  //   const [userData, setUserData] = useState([]);

  //   useEffect(() => {
  //     // Fetch data when the component mounts
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     //debugger
  //     try {
  //       const response = await fetch("http://192.168.254.249:5077/api/User");
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         setUserData(data);
  //       } else {
  //         console.error("Failed to fetch data");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  return (
    <div className="">
      <div className="container">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      SN
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {userData.map((user) => ( */}
                  <tr key={userData.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {userData.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {userData.imageName}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <a
                        href="#"
                        className="text-blue-500 mr-2 hover:text-blue-700"
                      >
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          strokeLinecap={2}
                          strokeLinejoin={2}
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                        View
                      </a>
                      <a
                        href="#"
                        className="text-green-500 mr-2 hover:text-green-700"
                      >
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          strokeLinecap={2}
                          strokeLinejoin={2}
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 15v3h3m4-3v3h3m-7 0l9-9-3-3-9 9"></path>
                        </svg>
                        Edit
                      </a>
                      <a href="#" className="text-red-500 hover:text-red-700">
                        <svg
                          className="w-4 h-4 inline-block"
                          fill="none"
                          strokeLinecap={2}
                          strokeLinejoin={2}
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Delete
                      </a>
                    </td>
                    {/* <td className="border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <HiOutlineEye />
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <HiOutlineEye />
                      </p>
                    </td> */}
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsList;
