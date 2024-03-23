"use client";
import { Button, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    categoryCode: "", // Initial category code
    categoryName: "",
    status: false,
    deleted: false
  });

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://192.168.1.67:5077/api/MenuCategory/CreateMenuCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Server Error!", {
          position: "top-right",
        });
        throw new Error("Network response was not ok");
      }

      // Optionally handle success response
      const responseData = await response.json();
      console.log(responseData); // Handle response data as needed

      // Close modal after successful submission
      onCloseModal();
      toast.success("Successfully Added!", {
        position: "bottom-right",
      });
      // Clear form data after successful submission
      setFormData({
        categoryCode: "",
        categoryName: "",
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("Error! Contact your support team", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div>
        <div className="pt-4">
          <Button
            className="text-cyan-600 text-white shadow-sm"
            onClick={() => setOpenModal(true)}
          >
            Add Category
          </Button>
          <Modal show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add category with the new one.
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <TextInput
                      id="categoryCode"
                      name="categoryCode"
                      placeholder="Category Code"
                      value={formData.categoryCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="pt-3">
                    <TextInput
                      id="categoryName"
                      name="categoryName"
                      placeholder="Category Name"
                      value={formData.categoryName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full pt-5">
                    <Button type="submit">Add</Button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddCategory;
