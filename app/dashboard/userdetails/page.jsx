"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Table, Pagination } from "flowbite-react";
import BASE_URL from "../../urlConfig/urlConfig";

const UserDetailsPage = () => {
  debugger;
  const [userData, setUserData] = useState([]);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1); // Define state for current page
  const onPageChange = (page) => setCurrentPage(page); // Function to handle page change
  const [itemsPerPage] = useState(5); // Set the number of items per page
  //Sorting
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to handle sorting
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // Function to sort data
  const sortedData = userData.sort((a, b) => {
    if (sortBy) {
      const compareValue = a[sortBy] > b[sortBy] ? 1 : -1;
      return sortOrder === "asc" ? compareValue : compareValue * -1;
    }
    return 0;
  });
  console.log(sortedData);
  const getSortIcon = (key) => {
    if (sortBy === key) {
      return sortOrder === "asc" ? <span>&uarr;</span> : <span>&darr;</span>;
    }
    return null;
  };

  // Calculate index range for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    //debugger
    try {
      console.log(`${BASE_URL}/User`)
      const response = await fetch(`${BASE_URL}/User`);
      console.log(`${BASE_URL}/User`)
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(currentItems);
  return (
    <div className="">
      <div className="container">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <Table>
                <Table.Head>
                  <Table.HeadCell onClick={() => handleSort("id")}>
                    {getSortIcon("id")}
                    <span>&uarr;</span> ID
                  </Table.HeadCell>
                  <Table.HeadCell onClick={() => handleSort("username")}>
                    {getSortIcon("username")}
                    <span>&uarr;</span> Full Name
                  </Table.HeadCell>
                  <Table.HeadCell onClick={() => handleSort("email")}>
                    {getSortIcon("email")}
                    <span>&uarr;</span> Email
                  </Table.HeadCell>
                  <Table.HeadCell onClick={() => handleSort("status")}>
                    {getSortIcon("status")}
                    <span>&uarr;</span> Status
                  </Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {currentItems.map((user) => (
                    <Table.Row key={user.id}>
                      <Table.Cell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <Image
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.username}
                            </p>
                            <p className="text-gray-600 whitespace-no-wrap">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Test Static
                        </p>
                      </Table.Cell>
                      <Table.Cell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {" "}
                          {user.email}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Active</span>
                        </span>
                      </Table.Cell>
                      <Table.Cell className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          type="button"
                          className="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            className="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                          </svg>
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto flex justify-end mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(sortedData.length / itemsPerPage)}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
