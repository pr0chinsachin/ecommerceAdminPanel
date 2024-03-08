"use client";
import React from "react";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {
  FileInput,
  Label,
  Button,
  TextInput,
  Textarea,
  Datepicker,
  Dropdown,
} from "flowbite-react";
import { useRouter } from "next/navigation";

const ProductPage = ({ placeholder }) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    subCategory: "",
    price: "",
    status: "",
    ContactNo: "",
    address: "",
    Occupation: "",
    Post: "",
    UserName: "",
    ProfileImg: null,
    RegRoles: "1",
    can_view_all_data: true,
    can_view_all_department: true,
    IsActive: true,
    Approved: true,
    description: "", // Added description field
    details: "", // Added details field
    uploadVideo: null, // Added uploadVideo field
  });

  const router = useRouter();
  const editor = useRef(null);

  // Handle input change for all form fields
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const inputValue = type === "file" ? event.target.files[0] : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  // Handle Jodit Editor content change
  const handleEditorChange = (newContent) => {
    setFormData({ ...formData, description: newContent });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://192.168.254.249:5077/api/Account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form data submitted successfully");
        alert("Form data submitted successfully");
        router.push("/login");
      } else {
        const errorMessage = await response.text();
        console.error(`Failed to submit form data: ${errorMessage}`);
        alert(`Failed to submit form data: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto pt-4 pb-10">
      {/* <h1 className="text-2xl pt-4 pb-4 text-slate-50 font-extrabold">
          Add Product
        </h1> */}
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className="mr-4 ml-4  pt-4 pb-4" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-cyan-600">
                Add Product Information
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="productName" value="Product name" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="productName"
                      id="productName"
                      autoComplete="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="category" value="Category" />
                  <div className="mt-2">
                    <Dropdown label="Choose Category">
                      <Dropdown.Item>Category 1</Dropdown.Item>
                      <Dropdown.Item>Category 2</Dropdown.Item>
                      <Dropdown.Item>Category 3</Dropdown.Item>
                      <Dropdown.Item>Category 4</Dropdown.Item>
                    </Dropdown>
                    {/* <TextInput
                      type="text"
                      name="category"
                      id="category"
                      autoComplete="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    /> */}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="subCategory" value="Sub Category" />
                  <div className="mt-2">
                    {/* <TextInput
                      type="text"
                      name="subCategory"
                      id="subCategory"
                      autoComplete="subCategory"
                      value={formData.subCategory}
                      onChange={handleInputChange}
                    /> */}
                    <Dropdown label="Choose Sub Category">
                      <Dropdown.Item>Sub Category 1</Dropdown.Item>
                      <Dropdown.Item>Sub Category 2</Dropdown.Item>
                      <Dropdown.Item>Sub Category 3</Dropdown.Item>
                      <Dropdown.Item>Sub Category 4</Dropdown.Item>
                    </Dropdown>{" "}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="price" value="Price" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="price"
                      id="price"
                      autoComplete="price"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="address" value="Address" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <Label htmlFor="file-upload" value="Add Product Image" />
                  <div className="mt-2">
                    <FileInput
                      name="addImage"
                      id="addImage"
                      autoComplete="addImage"
                      accept="image/*"
                      //value={formData.ProfileImg}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <Label htmlFor="Description" value="Description" />
                  <div className="mt-2">
                    {/* <Textarea
                      type="description"
                      name="description"
                      id="description"
                      autoComplete="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    /> */}
                    <JoditEditor
                      ref={editor}
                      value={formData.description}
                      config={{
                        readonly: false,
                        placeholder: "Start typing...",
                      }}
                      tabIndex={1}
                      onBlur={(newContent) => handleEditorChange(newContent)}
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-2 sm:col-start-1">
                  <Label htmlFor="city" value="City" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="UserName"
                      id="UserName"
                      autoComplete="UserName"
                      value={formData.UserName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div> */}

                <div className="col-span-full">
                  <Label htmlFor="details" value="Details" />
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      value={formData.details}
                      config={{
                        readonly: false,
                        placeholder: "Start typing...",
                      }}
                      tabIndex={1}
                      onBlur={(newContent) => handleEditorChange(newContent)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="uploadVideo" value="Upload Video" />
                  <div className="mt-2">
                    <FileInput
                      name="uploadVideo"
                      id="uploadVideo"
                      autoComplete="uploadVideo"
                      //value={formData.ProfileImg}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-3">
                  <Label htmlFor="username" value="User Name" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="userName"
                      id="userName"
                      autoComplete="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div> */}

                <div className="sm:col-span-3">
                  <Label htmlFor="pickDate" value="Publish Date" />
                  <div className="mt-2">
                    <Datepicker title="Datepicker" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button color="failure">Cancel </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
