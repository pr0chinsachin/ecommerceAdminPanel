"use client";
import React, { useState } from "react";
import { FileInput, Label, Button } from "flowbite-react";
import Image from "next/image";
import ImageDetailsList from "./imageDetailsList/imageDetailsList";
import "react-toastify/dist/ReactToastify.css";

const ProgressBar = ({ progress }) => (
  <div className="h-2 relative max-w-2xl rounded overflow-hidden">
    <div
      className="h-full bg-cyan-600 transition-all"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const CarouselImage = () => {
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const fileList = e.dataTransfer.files;
    handleImageChange(fileList);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleImageChange = async (fileList) => {
    setLoading(true); // Set loading to true while handling image change
    const imageArray = [];
    await Promise.all(
      Array.from(fileList).map(async (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          imageArray.push(reader.result);
        };
      })
    );
    console.log(setImages(imageArray));
    setImages(imageArray);
    setLoading(false); // Set loading to false after handling image change
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });

      setLoading(true); // Set loading to true while submitting

      const response = await fetch("http://192.168.1.65:5077/api/Login/login", {
        method: "POST",
        body: formData,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      });

      if (response.ok) {
        console.log("Images uploaded successfully!");
        setImages([]);
        toast.success("Successfull!", {
          position: "top-left",
        });
        setUploadProgress(0);
      } else {
        console.error("Error uploading images:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div>
      <h1 className="text-2xl pt-4 pb-4 text-slate-50 font-extrabold">
        Upload Image for Carousel Slider
      </h1>
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className="mr-4 ml-4  pt-4 pb-4" onSubmit={handleSubmit}>
          <div>
            <Label
              htmlFor="file-upload-helper-text"
              className="text-cyan-600 mt-2"
            >
              Upload file
            </Label>
          </div>
          <div
            className={`flex w-full items-center justify-center dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
              dragging ? "flowbite-file-upload-dragover" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {loading ? (
              <div>
                <ProgressBar
                  now={uploadProgress}
                  label={`${uploadProgress}%`}
                />{" "}
                {/* Show progress bar */}
                <p className="mt-2">Uploading...</p>
              </div>
            ) : (
              <>
                <Label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center pb-6 pt-5"
                >
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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </Label>
                <FileInput id="dropzone-file" className="hidden" />
              </>
            )}
          </div>
          <Button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm mt-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </Button>
        </form>
      </div>
      <div className="mt-10 mb-10">
        {loading ? (
          <div>
            <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />{" "}
            {/* Show progress bar */}
            <p className="mt-2">Uploading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <Image
                  src={image}
                  alt={`image-${index}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 mb-10">
        <ImageDetailsList />
      </div>
    </div>
  );
};

export default CarouselImage;
