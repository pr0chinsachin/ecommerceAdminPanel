"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Dropdown,
} from "flowbite-react";
import { useState } from "react";
//import CategoryList from "./categoryList/categoryList";

const AddCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    categoryName("");
  }
  return (
    <>
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
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Category Name" value="Category Name" />
                </div>
                <TextInput
                  id="caetgoryName"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(event) => setCategoryName(event.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <Button>Add</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/* <CategoryList /> */}
      </div>
    </>
  );
};

export default AddCategory;
