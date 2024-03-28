"use client";
import React, { useState } from "react";
import { Button, Pagination, Table, Badge, Modal } from "flowbite-react";

const AgentLists = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      agentName: "Sachin Maharjan",
      designation: "Senior BA",
      experience: "7 years",
      skill: "Soft and Professional Skills",
      email: "sac@gmail.com",
      contactNumber: "987986787787",
      information:
        "Hi My name is Sachin Maharjan and I have experience as a Business Analyst and Front end Developer",
      isActive: "active",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
    {
      id: 2,
      agentName: "Ram Maharjan",
      designation: "Business Man",
      experience: "7 years",
      skill: "Marketing",
      email: "ramc@gmail.com",
      contactNumber: "987986787787",
      address: "Bafal 13",
      information:
        "Hi My name is Ram Maharjan and I have experience in Marketing.",
      isActive: "active",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
    {
      id: 3,
      agentName: "John Maharjan",
      designation: "BA",
      experience: "1 years",
      skill: "Soft and Professional Skills",
      email: "john@gmail.com",
      contactNumber: "987986787787",
      address: "Dallu, Kathmandu 16",
      information:
        "Hi My name is John Maharjan and I have experience in Soft and Professional Skills.",
      isActive: "inactive",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
    {
      id: 4,
      agentName: "Sachin Maharjan",
      designation: "Senior BA",
      experience: "7 years",
      skill: "Soft and Professional Skills",
      email: "sac@gmail.com",
      contactNumber: "987986787787",
      address: "Balaju, Kathmandu 16",
      information:
        "Hi My name is Sachin Maharjan and I have experience in Soft and Professional Skills.",
      isActive: "inactive",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
    {
      id: 5,
      agentName: "Pushpa Maharjan",
      designation: "Real Estate Principle",
      experience: "2 years",
      skill: "Soft and Professional Skills",
      email: "sac@gmail.com",
      contactNumber: "987986787787",
      address: "Balaju, Kathmandu 16",
      information:
        "Hi My name is Pushpa Maharjan and I have experience as a Real Estate Principle.",
      isActive: "inactive",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
    {
      id: 6,
      agentName: "Samir Maharjan",
      designation: ".NET Developer",
      experience: "2 years",
      skill: "Soft and Professional Skills",
      email: "samir@gmail.com",
      contactNumber: "987986787787",
      address: "Balaju, Kathmandu 16",
      information:
        "Hi My name is Samir Maharjan and I have experience as a .NET Developer.",
      isActive: "active",
      uploadImage: "http://abc.mycompany.com/images/a.png",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [itemsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedData = userData.slice().sort((a, b) => {
    if (sortBy) {
      const compareValue = a[sortBy] > b[sortBy] ? 1 : -1;
      return sortOrder === "asc" ? compareValue : -compareValue;
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
      case "inactive":
        return <Badge color="failure">Inactive</Badge>;
      case "active":
        return <Badge color="success">Active</Badge>;
      default:
        return null;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handleViewDetails = (user) => {
    setSelectedRow(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="py-4 overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell onClick={() => handleSort("id")}>
              {getSortIcon("id")} ID
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("agentName")}>
              {getSortIcon("agentName")} Agent Name
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("designation")}>
              {getSortIcon("designation")} Designation
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("isActive")}>
              {getSortIcon("isActive")} Is Active
            </Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {currentItems.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.agentName}</Table.Cell>
                <Table.Cell>{user.designation}</Table.Cell>
                <Table.Cell>{renderStatusLabelColor(user.isActive)}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleViewDetails(user)}>View</Button>
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
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        {selectedRow && (
          <div className="modal-content">
            <div className="modal-header">
              <button className="close-btn" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h2 className="modal-title">Details</h2>
              <hr />
              <p>
                <strong>Full name:</strong> {selectedRow.agentName}
              </p>
              <p>
                <strong>Designation:</strong> {selectedRow.designation}
              </p>
              <p>
                <strong>Experience:</strong> {selectedRow.experience}
              </p>
              <p>
                <strong>Email Address:</strong> {selectedRow.email}
              </p>
              <p>
                <strong>Address:</strong> {selectedRow.address}
              </p>
              <p>
                <strong>Contact Number:</strong> {selectedRow.contactNumber}
              </p>
              <p>
                <strong>Detail Information:</strong>
              </p>
              <p>{selectedRow.information}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AgentLists;
