"use client";

import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Image from "next/image";

const GalleryComponent = (props) => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      newImages.push({
        file: files[i],
        url: URL.createObjectURL(files[i]),
        description: "",
      });
    }
    setImages(newImages);
  };

  const handleEditPictures = () => {
    setIsOpen(!isOpen);
  };

  const hadleDeletePicture = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleUpdateDescription = (index, description) => {
    const newImages = [...images];
    newImages[index].description = description;
    setImages(newImages);
  };

  const handleUpdatePicture = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = {
        ...newImages[index],
        file: file,
        url: URL.createObjectURL(file),
      };
      setImages(newImages);
    }
  };

  const handleConfirmDelete = (id) => {
    setConfirmDelete(id);
    console.log(id);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 my-4 mx-2">
        {images.length === 0 && (
          <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <p className="mx-auto text-gray-300">
                <FaCloudUploadAlt className="m-auto w-14 h-14" />
              </p>
              <div className="mt-4 flex text-xl leading-6 text-black">
                <p className="pr-1">drag and drop your images or</p>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-dark outline-none"
                >
                  <span className="pl-1">
                    <b>Browse</b> to choose a file{" "}
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
        )}
        {images.length > 0 && (
          <div
            onClick={handleEditPictures}
            className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer"
          >
            <div className="relative w-full h-[12rem] overflow-hidden flex position-relative">
              {images.map((image, index) => (
                <Image
                  key={index}
                  className={`border border-black w-[20rem] h-[12rem] absolute bg-white`}
                  style={{ left: `${index * 6}rem` }}
                  src={image.url}
                  alt={`Preview ${index}`}
                  width={320} // Añadido
                  height={192} // Añadido
                  objectFit="cover" // Añadido
                />
              ))}
            </div>
          </div>
        )}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]">
            <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-5xl">
              <button
                onClick={togglePopup}
                className="absolute top-2 right-4 text-xl text-black rounded-full p-2 hover:text-black"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm0-11.768 3.535-3.535 1.768 1.768L16.768 15l3.535 3.535-1.768 1.768L15 16.768l-3.536 3.535-1.767-1.768L13.232 15l-3.535-3.536 1.768-1.767L15 13.232z"
                    fill="#001238"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">Photos Gallery</h2>
              <div className="grid grid-cols-3 gap-8 mt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="border border-[#0000002b] rounded-md"
                  >
                    <div className="border-b border-[#0000002b] p-2 group relative content-center h-[13rem] overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.description}
                        className="max-h-[12rem] m-auto w-full h-full"
                        width={320} // Añadido
                        height={192} // Añadido
                        objectFit="cover" // Añadido
                      />
                      {confirmDelete === index && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-[#f5f8ff] p-4 h-full flex">
                            <div className="flex m-auto m-auto flow-root text-center">
                              <p className="text-xl font-extrabold text-center pb-4">
                                Are you sure you want to delete this image
                              </p>
                              <button
                                onClick={() => hadleDeletePicture(index)}
                                className="mt-4 bg-[#d6f898] border border-[#d6f898] text-[#001238] px-4 py-2 rounded-md mr-2 font-extrabold	"
                              >
                                Yes
                              </button>
                              <button
                                onClick={() => setConfirmDelete(null)}
                                className="mt-4 bg-[#f5f8ff] border border-[#001238] text-[#001238] px-4 py-2 rounded-md font-extrabold	"
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {confirmDelete != index && (
                        <div className="bottom-4 left-4 absolute flex gap-x-3 font-extrabold">
                          <span
                            onClick={() => handleConfirmDelete(index)}
                            className="flex items-center gap-2 group-hover:text-[#001238] group-hover:bg-[#d6f898] rounded-md cursor-pointer transition duration-300 p-2"
                          >
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.333 3.333V1.667h8.334v1.666h4.166V5h-1.666v12.5c0 .46-.374.833-.834.833H4.667a.833.833 0 0 1-.834-.833V5H2.166V3.333h4.167zM5.5 5v11.667h10V5h-10zM8 7.5h1.666v6.667H8V7.5zm3.333 0H13v6.667h-1.667V7.5z"
                                fill="#001238"
                              />
                            </svg>
                            Delete
                          </span>

                          <label
                            htmlFor={`file-update-${index}`}
                            className="text-[#ffffff00] group-hover:text-[#001238] group-hover:bg-[#d6f898] rounded-md p-2 cursor-pointer transition duration-300 items-center gap-1 flex"
                          >
                            <input
                              id={`file-update-${index}`}
                              type="file"
                              className="hidden"
                              onChange={handleUpdatePicture(index)}
                            />
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.993 17.5a.827.827 0 0 1-.826-.828V3.328c0-.457.379-.828.826-.828h15.014c.456 0 .826.37.826.828v13.344c0 .457-.38.828-.826.828H2.993zm14.173-5V4.167H3.833v11.666L12.166 7.5l5 5zm0 2.357-5-5-5.976 5.976h10.976v-.976zm-10-5.69a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334z"
                                fill="#001238"
                              />
                            </svg>
                            <span>Replace</span>
                          </label>
                        </div>
                      )}
                    </div>
                    <input
                      className="w-full p-3 outline-none overflow-hidden rounder-b-lg"
                      type="text"
                      name=""
                      id=""
                      value={image.description}
                      onChange={(e) =>
                        handleUpdateDescription(index, e.target.value)
                      }
                      placeholder="Add a description"
                    />
                  </div>
                ))}
                <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-[#f5f8ff] min-w-[16rem]">
                  <div className="text-center content-center">
                    <p className="mx-auto text-gray-300">
                      <svg
                        className="mx-auto"
                        width="76"
                        height="75"
                        viewBox="0 0 76 75"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38 39.33 51.258 52.59l-4.42 4.42-5.713-5.712V68.75h-6.25V51.29l-5.714 5.718-4.42-4.42L38 39.332zm0-33.08c11.23 0 20.483 8.461 21.732 19.356 7.286 1.993 12.643 8.661 12.643 16.581 0 8.966-6.864 16.327-15.623 17.118v-6.291c5.3-.76 9.373-5.317 9.373-10.827 0-6.04-4.897-10.937-10.938-10.937-.652 0-1.291.057-1.91.169.228-1.062.348-2.164.348-3.294 0-8.63-6.996-15.625-15.625-15.625-8.63 0-15.625 6.996-15.625 15.625 0 1.13.12 2.232.35 3.292a11.02 11.02 0 0 0-1.913-.167c-6.04 0-10.937 4.897-10.937 10.938 0 5.313 3.789 9.741 8.812 10.73l.563.096.001 6.291c-8.76-.789-15.626-8.151-15.626-17.117 0-7.92 5.357-14.59 12.645-16.581C17.517 14.71 26.77 6.25 38 6.25z"
                          fill="#000"
                          fill-opacity=".05"
                        />
                      </svg>
                    </p>
                    <div className="mt-4 flex text-xl leading-6 text-black">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-dark outline-none"
                      >
                        <span className="text-[#2c5ef9]">Add More</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only outline-none"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const GalleryEditor = createReactBlockSpec(
  {
    type: "gallery",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
    },
    content: "none",
  },
  {
    render: (props) => <GalleryComponent {...props} />,
  }
);
