"use client";
import React from "react";
import { useState } from "react";
import { FileInput, Label, Button, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../urlConfig/urlConfig";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Password: "",
    ConfirmPassword: "",
    Address: "",
    ContactNo: "",
    Email: "",
    Occupation: "",
    Post: "",
    UserName: "",
    ProfileImg: null,
    RegRoles: "1",
    can_view_all_data: true,
    can_view_all_department: true,
    IsActive: true,
    Approved: true,
  });

  const router = useRouter();

  // Handle input change for all form fields
  const handleInputChange = (event) => {
    debugger;
    const { name, value, type } = event.target;
    console.log(event.target);

    // For file input, use files[0]
    const inputValue = type === "file" ? event.target.files[0] : value;

    setFormData({ ...formData, [name]: inputValue });
    console.log(formData);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    const formDataToSend = new FormData(); // Create a new FormData object

    console.log("data --->", formData);
    // Append each form field to the FormData object
    // Object.entries(formData).forEach(([key, value]) => {
    //   formDataFinal.append(key, value);
    //   console.log(".....value............",formDataFinal.append(key, value));
    // });
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
      console.log(".....value............", formDataToSend.append(key, value));
    });

    console.log(".................", formDataToSend);
    try {
      const response = await fetch(`${BASE_URL}/Account`, {
        method: "POST",
        body: formDataToSend,
      });
      console.log(response);
      if (response.ok) {
        console.log("Form data submitted successfully");
        //alert("Form data submitted successfully");
        const message = await response.text();
        console.log(`Your response: ${message}`);
        alert(`Your response: ${message}`);
        toast.success("Successfully Logged In!", {
          position: "top-left",
          autoClose: 30000, // Set duration for the toast notification (in milliseconds)
        });
        // setTimeout(() => {
        //   router.push("/login"); // Navigate to the login page after 3 seconds
        // }, 30000); // 3000 milliseconds = 3 seconds;
      } else {
        const errorMessage = await response.text();
        console.error(`Failed to submit form data: ${errorMessage}`);
        toast.warning("Validation Error", {
          position: "top-left",
        });
        alert(`Failed to submit form data: ${errorMessage}`);
      }
    } catch (error) {
      toast.error("Server Error", {
        position: "top-left",
      });
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
                      name="FirstName"
                      id="FirstName"
                      autoComplete="FirstName"
                      value={formData.FirstName}
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
                      name="LastName"
                      id="LastName"
                      autoComplete="LastName"
                      value={formData.LastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="password" value="Password" />
                  <div className="mt-2">
                    <TextInput
                      type="Password"
                      name="Password"
                      id="Password"
                      autoComplete="password"
                      value={formData.Password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="retypePassword" value=" Retype Password" />
                  <div className="mt-2">
                    <TextInput
                      type="password"
                      name="ConfirmPassword"
                      id="ConfirmPassword"
                      autoComplete="ConfirmPassword"
                      value={formData.ConfirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="address" value="Address" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="Address"
                      id="Address"
                      autoComplete="Address"
                      value={formData.Address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="email" value="Email address" />
                  <div className="mt-2">
                    <TextInput
                      id="Email"
                      name="Email"
                      type="email"
                      autoComplete="Email"
                      value={formData.Email}
                      onChange={handleInputChange}
                      placeholder="name@abc.com"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label htmlFor="UserName" value="User Name" />
                  <div className="mt-2">
                    <TextInput
                      id="UserName"
                      name="UserName"
                      type="text"
                      autoComplete="UserName"
                      value={formData.UserName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label htmlFor="phone" value=" Phone Number" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="ContactNo"
                      id="ContactNo"
                      autoComplete="ContactNo"
                      value={formData.ContactNo}
                      onChange={handleInputChange}
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

                <div className="sm:col-span-2">
                  <Label htmlFor="occupation" value="Occupation" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="Occupation"
                      id="Occupation"
                      autoComplete="Occupation"
                      value={formData.Occupation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="post" value="Post" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="Post"
                      id="Post"
                      autoComplete="Post"
                      value={formData.Post}
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

                <div className="sm:col-span-2">
                  <Label htmlFor="file-upload" value="Upload Image" />
                  <div className="mt-2">
                    <FileInput
                      name="ProfileImg"
                      id="ProfileImg"
                      autoComplete="ProfileImg"
                      accept="image/*"
                      //value={formData.ProfileImg}
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
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
