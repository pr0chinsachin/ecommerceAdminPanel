"use client";
import { Button, Label, Modal, TextInput, Select } from "flowbite-react";
import { useState } from "react";

const SubCategoryModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    category: "", // Initialize category state
    subCategoryName: "", // Initialize subCategoryName state
  });

  function onCloseModal() {
    setOpenModal(false);
    // Reset form data when closing modal
    setFormData({
      category: "",
      subCategoryName: "",
    });
  }

  // Handle input change for all form fields
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://example.com/api/add-subcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send formData object
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      onCloseModal();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <>
      <div className="pt-4">
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
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
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
    </>
  );
};

export default SubCategoryModal;
