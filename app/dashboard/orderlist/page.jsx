"use client";
import React, { useState } from "react";
import { Button, Pagination, Table, Badge } from "flowbite-react";

const OrderList = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      CustomerName: "Sachin Maharjan",
      address: "Balaju",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      staus: "pending",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
    {
      id: 2,
      CustomerName: "Ram Maharjan",
      address: "Bafal",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      staus: "cancelled",
      deliveryOptions: "esewa",
      deliveryDate: "2023-06-11",
    },
    {
      id: 3,
      CustomerName: "Sushan Maharjan",
      address: "Gongabun",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      staus: "in progress",
      deliveryOptions: "Mobile Banking",
      deliveryDate: "2023-06-11",
    },
    {
      id: 4,
      CustomerName: "Samir Maharjan",
      address: "Balaju",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Samsung Phone",
      price: "$94,567,87",
      staus: "delivered",
      deliveryOptions: "Mobile Banking",
      deliveryDate: "2023-06-11",
    },
    {
      id: 5,
      CustomerName: "Suniva Maharjan",
      address: "Balaju",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Andrich Road 32 prpoerty",
      price: "$94,567,87",
      staus: "in progress",
      deliveryOptions: "esewa",
      deliveryDate: "2023-06-11",
    },
    {
      id: 6,
      CustomerName: "Chaitya Narayan Maharjan",
      address: "Balaju,Macchpokhari",
      phoneNumber: "9876785876",
      email: "sac@gmail.com",
      productName: "Kurtha",
      price: "$94,567,87",
      staus: "pending",
      deliveryOptions: "Khalti",
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
      staus: "In Progress",
      deliveryOptions: "Mobile Banking",
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
      staus: "pending",
      deliveryOptions: "esewa",
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
      staus: "in process",
      deliveryOptions: "Mobile Banking",
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
      staus: "in process",
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
      staus: "delivered",
      deliveryOptions: "cash On delivery",
      deliveryDate: "2023-06-11",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [itemsPerPage] = useState(5);

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

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

  const renderStatusLabelColor = (status) => {
    switch (status) {
      case "pending":
        return <Badge color="info">Pending</Badge>;
      case "cancelled":
        return <Badge color="failure">Cancelled</Badge>;
      case "in progress":
        return <Badge color="warning">In Progress</Badge>;
      case "delivered":
        return <Badge color="success">Delivered</Badge>;
      default:
        return null;
    }
  };

  const renderDeliveryBadge = (option) => {
    switch (option) {
      case "cash On delivery":
        return <Badge color="success">Cash On Delivery</Badge>;
      case "esewa":
        return <Badge color="info">eSewa</Badge>;
      case "Khalti":
        return <Badge color="info">Khalti</Badge>;
      case "Mobile Banking":
        return <Badge color="warning">Mobile Banking</Badge>;
      default:
        return null;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <div className="py-4 overflow-x-auto">
        <Table>
          <Table.Head>
              <Table.HeadCell onClick={() => handleSort("id")}>
                {getSortIcon("id")} ID
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("CustomerName")}>
                {getSortIcon("CustomerName")} Customer
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("productName")}>
                {getSortIcon("productName")} Product
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("price")}>
                {getSortIcon("price")} Price
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("status")}>
                {getSortIcon("status")} Status
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("deliveryOptions")}>
                {getSortIcon("deliveryOptions")} Delivery
              </Table.HeadCell>
              <Table.HeadCell onClick={() => handleSort("deliveryDate")}>
                {getSortIcon("deliveryDate")} Date
              </Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {currentItems.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.CustomerName}</Table.Cell>
                <Table.Cell>{user.productName}</Table.Cell>
                <Table.Cell>{user.price}</Table.Cell>
                <Table.Cell>{renderStatusLabelColor(user.staus)}</Table.Cell>
                <Table.Cell>{renderDeliveryBadge(user.deliveryOptions)}</Table.Cell>
                <Table.Cell>{user.deliveryDate}</Table.Cell>
                <Table.Cell>
                  <Button>View</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortedData.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default OrderList;
