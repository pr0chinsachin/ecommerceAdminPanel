"use client";
import React, { useState } from "react"; // Import React and useState
import { Button, Pagination, Table } from "flowbite-react";

const OrderList = () => {
  // Sample data
  const [userData, setUserData] = useState([
    {
      id: 1,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 2,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 3,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 4,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 5,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 6,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 7,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 8,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 9,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 10,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 11,
      CustomerName: "Rent",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      status: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
  ]);

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
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell onClick={() => handleSort("id")}>
                {getSortIcon("id")}
                <span>&uarr;</span> Id
              </Table.HeadCell>
              <Table.HeadCell>Customer Name</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>Number</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Produtct</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("status")}>
                {getSortIcon("status")}
                <span>&uarr;</span>Status
              </Table.HeadCell>
              <Table.HeadCell>Payment Option</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
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
                      {user.CustomerName}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.address}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.phoneNumber}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.email}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.productName}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.price}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.status}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.deliveryOptions}
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user.deliveryDate}
                    </p>
                  </Table.Cell>

                  <Table.Cell>
                    <Button> View</Button>
                  </Table.Cell>
                  {/* <Table.Cell>
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
                  </Table.Cell> */}
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
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
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

export default OrderList;
