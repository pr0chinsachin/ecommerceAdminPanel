"use client";
import React, { useState } from "react"; // Import React and useState
import { Button, Pagination } from "flowbite-react";
import { Table } from "flowbite-react";

// const userData = {
//   id: "1",
//   categoryName: "New Phones",
//   subCategoryName: "Apple",
// };

const SubCategoryList = () => {
  // Sample data
  const [userData, setUserData] = useState([
    { id: 1, categoryName: "Rent", subCategoryName: "N/A" },
    { id: 2, categoryName: "Propery Sale", subCategoryName: "Land" },
    { id: 3, categoryName: "Buy Property", subCategoryName: "House" },
    { id: 4, categoryName: "Buildings", subCategoryName: "Apartment" },
    { id: 5, categoryName: "Repair", subCategoryName: "Apple" },
    { id: 6, categoryName: "New Phones", subCategoryName: "Samsung" },
    { id: 7, categoryName: "Used Phones", subCategoryName: "Xiome" },
    { id: 8, categoryName: "Accessories", subCategoryName: "Oppo" },
  ]);

  const [currentPage, setCurrentPage] = useState(1); // Define state for current page
  const onPageChange = (page) => setCurrentPage(page); // Function to handle page change
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [itemsPerPage] = useState(5); // Set the number of items per page

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

  return (
    <div className="">
      <div className="container">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <Table className="min-w-full leading-normal">
                {/* className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" */}
                <Table.Head>
                  <Table.HeadCell onClick={() => handleSort("id")}>
                    {getSortIcon("id")}
                    <span>&uarr;</span> Id
                  </Table.HeadCell>
                  <Table.HeadCell onClick={() => handleSort("categoryName")}>
                    {getSortIcon("categoryName")} <span>&uarr;</span>Category
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell onClick={() => handleSort("subCategoryName")}>
                    {getSortIcon("subCategoryName")} <span>&uarr;</span>Category
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell>Add If Needed</Table.HeadCell>
                  <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {/* className="px-5 py-5 border-b border-gray-200 bg-white text-sm" */}
                  {currentItems.map((user) => (
                    <Table.Row key={user.id}>
                      <Table.Cell>
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.categoryName}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.subCategoryName}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <Button>Add Model</Button>
                      </Table.Cell>
                      {/* <Table.Cell>
                      <a
                        href="#"
                        className="text-blue-500 mr-2 hover:text-blue-700"
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="text-green-500 mr-2 hover:text-green-700"
                      >
                        Edit
                      </a>
                      <a href="#" className="text-red-500 hover:text-red-700">
                        Delete
                      </a>
                    </Table.Cell> */}
                      <Table.Cell>
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
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto">
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

export default SubCategoryList;
