"use client";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setCategoryName(""); // Fixed typo here from categoryName("") to setCategoryName("")
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://example.com/api/add-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }), // Sending categoryName as JSON
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
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error("Error! Contact your support team", {
        position: "top-right",
      });
    }
  }

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
                  <div>
                    {/* <div className="mb-2 block">
                    <Label htmlFor="Category Name" value="Category Name" />
                  </div> */}
                    <TextInput
                      id="categoryName"
                      placeholder="Category Name"
                      value={categoryName}
                      onChange={(event) => setCategoryName(event.target.value)}
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
