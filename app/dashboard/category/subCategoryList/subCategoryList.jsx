"use client";
import React, { useState } from "react"; // Import React and useState
import { Button, Pagination } from "flowbite-react";
import { Table } from "flowbite-react";

const userData = {
  id: "1",
  categoryName: "New Phones",
  subCategoryName: "Apple",
};

const SubCategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1); // Define state for current page

  const onPageChange = (page) => setCurrentPage(page); // Function to handle page change
  return (
    <div className="">
      <div className="container">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <Table className="min-w-full leading-normal">
                {/* className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" */}
                <Table.Head>
                  <Table.HeadCell>ID</Table.HeadCell>
                  <Table.HeadCell>Category Name</Table.HeadCell>
                  <Table.HeadCell className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Sub Category Name
                  </Table.HeadCell>
                  <Table.HeadCell className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Add If Needed
                  </Table.HeadCell>
                  <Table.HeadCell className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {/* className="px-5 py-5 border-b border-gray-200 bg-white text-sm" */}
                  <Table.Row key={userData.id}>
                    <Table.Cell>
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {userData.id}
                          </p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="text-gray-900 whitespace-no-wrap">
                        {userData.categoryName}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="text-gray-900 whitespace-no-wrap">
                        {userData.subCategoryName}
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
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto">
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default SubCategoryList;
