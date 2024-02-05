"use client";
import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] =useState(
    {
      id:'121',
      firstName:'',
      lastName:'',
      password:'',
      retypePassword:'',
      address:'',
      email:'',
      phoneNumber:'',
      city:'',
      occupation:'',
      post:'',
      uploadImage:''
    }
      );
  const handleInputChange = (event) =>{
    setPost({...formData,[event.target.name]:event.target.event})
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://192.168.254.249:5077/api/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response.body);
      if (response.ok) {
        // Handle successful response
        console.log('Form data submitted successfully');
        alert('Form data submitted successfully');
      } else {
        // Handle error response
        const errorMessage = await response.text(); // Assuming the server sends an error message
        console.error(`Failed to submit form data: ${errorMessage}`);
        alert(`Failed to submit form data: ${errorMessage}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  }
  
  return (
    <div className='container mx-auto pt-4 pb-4'>
      <h1 className='text-2xl pt-4 pb-4 font-extrabold'>Register Your account</h1>
      <div class="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className='mr-4 ml-4  pt-4 pb-4' onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.firstName} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.lastName} onChange={handleInputChange}
                   />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.password} onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="retypePassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Retype Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="retypePassword"
                      id="retypePassword"
                      autoComplete="retypePassword"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.retypePassword} onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.address} onChange={handleInputChange}
                    /> 
                  </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.email} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="post" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="phoneNumber"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.phoneNumber} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.city} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="occupation" className="block text-sm font-medium leading-6 text-gray-900">
                   Occupation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="occupation"
                      id="occupation"
                      autoComplete="occupation"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.occupation} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="post" className="block text-sm font-medium leading-6 text-gray-900">
                    Post
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="post"
                      id="post"
                      autoComplete="post"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.post} onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="uploadImage" className="block text-sm font-medium leading-6 text-gray-900">
                   Upload Profile Picture
                  </label>
                  <div className="mt-2">
                    <input
                      type="file"
                      name="uploadImage"
                      id="uploadImage"
                      autoComplete="uploadImage"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.uploadImage} onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register