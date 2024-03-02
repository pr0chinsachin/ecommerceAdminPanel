"use client";
import React from "react";
import { useState } from "react";
import {
  FileInput, Label, Button,
  TextInput
} from 'flowbite-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    password: "",
    retypePassword: "",
    address: "",
    email: "",
    phoneNumber: "",
    city: "",
    occupation: "",
    post: "",
    userName:"",
    uploadImage: null,
    // regRole:"1",
    // can_view_all_data:true,
    // can_view_all_department:true,
    // IsActive:true,
    // approved:true,
  });

// Handle input change for all form fields
const handleInputChange = (event) => {
  const { name, value, type, files } = event.target;
  // For file input, use files[0]
  const inputValue = type === 'file' ? files[0] : value;
  setFormData({ ...formData, [name]: inputValue });
  console.log(setFormData)
};

// Handle form submission
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    try {
      const response = await fetch("http://192.168.254.249:5077/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });
      if (response.ok) {
        console.log("Form data submitted successfully");
        alert("Form data submitted successfully");
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
    <div className="container mx-auto pt-4 pb-4">
      <h1 className="text-2xl pt-4 pb-4 font-extrabold">
        Register Your account
      </h1>
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className="mr-4 ml-4  pt-4 pb-4" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Label htmlFor="firstName" value="First name" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="lastName" value="Last name" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="password" value="Password" />
                  <div className="mt-2">
                    <TextInput
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="retypePassword" value=" Retype Password" />
                  <div className="mt-2">
                    <TextInput
                      type="password"
                      name="retypePassword"
                      id="retypePassword"
                      autoComplete="retypePassword"
                      value={formData.retypePassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
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
                <div className="sm:col-span-2">
                  <Label htmlFor="email" value="Email address" />
                  <div className="mt-2">
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@abc.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="phone" value=" Phone Number" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Label htmlFor="city" value="City" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="occupation" value="Occupation" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="occupation"
                      id="occupation"
                      autoComplete="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="post" value="Post" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="post"
                      id="post"
                      autoComplete="post"
                      value={formData.post}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
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
                </div>


                <div className="sm:col-span-3">
                  <Label htmlFor="file-upload" value="Upload Image" />
                  <div className="mt-2">
                    <FileInput
                      autoComplete="uploadImage"
                      value={formData.uploadImage}
                      onChange={handleInputChange}
                    />
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

export default RegisterForm;
