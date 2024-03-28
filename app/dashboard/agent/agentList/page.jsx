"use client";
import React, { useState } from "react";
import { Button, Pagination, Table, Badge } from "flowbite-react";

const AgentLists = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      productName: "Xiome A3",
      category: "Mobile",
      subCategory: "MIUI",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "active",
    },
    {
      id: 2,
      productName: "Samsung Note 2",
      category: "Mobile",
      subCategory: "Samsung",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "active",
    },
    {
      id: 3,
      productName: "IPhone 14 Promax",
      category: "Mobile",
      subCategory: "Iphone",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "in active",
    },
    {
      id: 4,
      productName: "One Plus 10T",
      category: "Mobile",
      subCategory: "One Plus",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "active",
    },
    {
      id: 5,
      productName: "Rent Atradt QueensLand",
      category: "Rent/leased",
      subCategory: "Apartment",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "active",
    },
    {
      id: 6,
      productName: "Sachin Maharjan",
      category: "Balaju",
      subCategory: "9876785876",
      price: "sac@gmail.com",
      address: "Andrich Road 32 prpoerty",
      date: "2023-06-11",
      status: "in active",
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
      case "in active":
        return <Badge color="failure">In Active</Badge>;
      case "active":
        return <Badge color="success">Active</Badge>;
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
            <Table.HeadCell onClick={() => handleSort("productName")}>
              {getSortIcon("productName")} Agent Name
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("productName")}>
              {getSortIcon("category")} Designation
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("status")}>
              {getSortIcon("subCategory")} Experience
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("deliveryOptions")}>
              {getSortIcon("price")} Email
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("deliveryDate")}>
              {getSortIcon("address")} Address
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("deliveryDate")}>
              {getSortIcon("date")} Contact Number
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("deliveryDate")}>
              {getSortIcon("status")} Date
            </Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {currentItems.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.productName}</Table.Cell>
                <Table.Cell>{user.category}</Table.Cell>
                <Table.Cell>{user.subCategory}</Table.Cell>
                <Table.Cell>{user.price}</Table.Cell>
                <Table.Cell>{user.address}</Table.Cell>
                <Table.Cell>{renderStatusLabelColor(user.status)}</Table.Cell>
                <Table.Cell>{user.date}</Table.Cell>
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

export default AgentLists;
