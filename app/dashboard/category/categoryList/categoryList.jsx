"use client";
import React from "react";
import { Button, Table } from "flowbite-react";
const userData = {
  // Define the structure of your user data
  id: "1",
  categoryName: "New Phones",
};

const categoryList = () => {
  return (
    <div className="">
      <div className="container">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <Table>
                <Table.Head>
                  <Table.HeadCell> ID</Table.HeadCell>
                  <Table.HeadCell>Category Name</Table.HeadCell>

                  <Table.HeadCell>Add</Table.HeadCell>
                  <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {/* {userData.map((user) => ( */}
                  <Table.Row
                    key={userData.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
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
                      <Button>Add Sub-Category</Button>
                    </Table.Cell>
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
                  {/* ))} */}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default categoryList;
