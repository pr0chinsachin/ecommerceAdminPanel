import React from "react";
import { FileInput, Label } from "flowbite-react";
import ImageDetailsList from "./imageDetailsList/imageDetailsList";

const CarouselImage = () => {
  return (
    <div>
      <h1 className="text-2xl pt-4 pb-4 font-extrabold">
        Upload Image for Carousel Slider
      </h1>
      <div className="max-auto rounded overflow-hidden shadow-lg bg-slate-50">
        <form className="mr-4 ml-4  pt-4 pb-4">
          <div>
            <Label
              htmlFor="file-upload-helper-text"
              className="text-white mt-2"
              value="Upload file"
            />
          </div>
          <FileInput
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
            className="mt-2"
          />
          <button
            type="submit"
            className="rounded-md bg-cyan-600 px-3 py-2 text-sm mt-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </form>
      </div>
      <div className="mt-10 mb-10">
        <ImageDetailsList />
      </div>
    </div>
  );
};

export default CarouselImage;
