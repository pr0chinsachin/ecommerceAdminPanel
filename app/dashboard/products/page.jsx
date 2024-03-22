"use client";
import React from "react";
import { useState, useRef } from "react";
//import JoditEditor from "jodit-react";
import {
  FileInput,
  Label,
  Button,
  TextInput,
  Textarea,
  Datepicker,
  Dropdown,
  Select,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ProductPage = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
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
                  <div className="mt-2 max-w-md">
                    <div className="max-w-md">
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
                  <div className="mt-2 max-w-md">
                    <Select
                      id="category"
                      required
                      name="category" // Set name attribute for select
                      value={formData.subCategory} // Use formData.category for value
                      onChange={handleInputChange}
                    >
                      <option value="">Select Sub - Category</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                    </Select>
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
                  {/* <Label htmlFor="file-upload" value="Add Product Image" />
                  <div className="mt-2">
                    <FileInput
                      name="addImage"
                      id="addImage"
                      autoComplete="addImage"
                      accept="image/*"
                      //value={formData.ProfileImg}
                      onChange={handleInputChange}
                    />
                  </div> */}
                  <div className="flex w-full items-center justify-center">
                    <Label
                      htmlFor="file-upload"
                      className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <FileInput id="dropzone-file" className="hidden" />
                    </Label>
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
