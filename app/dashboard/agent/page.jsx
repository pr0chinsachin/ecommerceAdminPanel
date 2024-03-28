"use client";
import React from "react";
import { useState, useRef } from "react";
//import JoditEditor from "jodit-react";
import { FileInput, Label, Button, TextInput, Textarea } from "flowbite-react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import BASE_URL from "../../urlConfig/urlConfig";

const AddAgent = () => {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const [formData, setFormData] = useState({
    agentName: "",
    designation: "",
    experience: "",
    email: "",
    address: "",
    contactNumber: "",
    skill: "",
    information: "",
    uploadImage: "",
    UserName: "",
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
      const response = await fetch(`${BASE_URL}/`, {
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
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className="mr-4 ml-4  pt-4 pb-4" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-cyan-600">
                Add Agent Information
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <Label htmlFor="agentName" value="Agent Name" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="agentName"
                      id="agentName"
                      autoComplete="agentName"
                      value={formData.agentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="designation" value="Designation" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="designation"
                      id="designation"
                      autoComplete="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="experience" value="Experience" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="experience"
                      id="experience"
                      autoComplete="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email" value="Email" />
                  <div className="mt-2">
                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
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
                  <Label htmlFor="contactNumber" value="Contact Number" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      autoComplete="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-full">
                  <Label htmlFor="skill" value="Skills" />
                  <div className="mt-2">
                    <Textarea
                      type="description"
                      name="skill"
                      id="skill"
                      autoComplete="skill"
                      value={formData.skill}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <Label htmlFor="information" value="Detail Information" />
                  <div className="mt-2">
                    <JoditEditor
                      ref={editor}
                      value={formData.information}
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
                  <Label htmlFor="file-upload" value="Upload Image" />
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

                <div className="sm:col-span-3">
                  <Label htmlFor="uploadVideo" value="Add Embeded Video" />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="uploadVideo"
                      id="uploadVideo"
                      autoComplete="uploadVideo"
                      value={formData.uploadVideo}
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

export default AddAgent;
