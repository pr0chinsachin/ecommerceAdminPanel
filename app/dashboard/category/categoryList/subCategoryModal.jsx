"use client";
import { Button, Label, Modal, TextInput, Select } from "flowbite-react";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../urlConfig/urlConfig";

const SubCategoryModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    category: "", // Initialize category state
    subCategoryName: "", // Initialize subCategoryName state
  });
  const [categoryList, setCategoryList] = useState([]);

  function onCloseModal() {
    setOpenModal(false);
    // Reset form data when closing modal
    setFormData({
      category: "",
      subCategoryName: "",
    });
  }
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    //debugger
    try {
      const response = await fetch(`${BASE_URL}/MenuCategory/CategoryList`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCategoryList(data); // Set category list state
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Handle input change for all form fields
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send formData object
      });

      if (!response.ok) {
        toast.error("Server Error!", {
          position: "top-right",
        });
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      onCloseModal();
      toast.success("Successfully Added!", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Error! Please contact your support team", {
        position: "top-right",
      });
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <div>
      <div className="">
        <Button
          className="text-cyan-600 text-white shadow-sm"
          onClick={() => setOpenModal(true)}
        >
          Add Sub-Category
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Sub category
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="max-w-md mt-3">
                  <Select
                    id="category"
                    required
                    name="category" // Set name attribute for select
                    value={formData.category} // Use formData.category for value
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    {categoryList.map((category) => (
                      <option key={category.id} value={category.categoryTitle}>
                        {category.categoryTitle}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="max-w-md mt-3">
                  <TextInput
                    id="subCategoryName"
                    placeholder="Sub Category Name"
                    name="subCategoryName" // Set name attribute for text input
                    value={formData.subCategoryName} // Use formData.subCategoryName for value
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
  );
};

export default SubCategoryModal;
