"use client";

import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";

import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FaqComponent = (props) => {
  const [frecuentQuestions, setFrecuentQuestions] = useState([
    {
      id: 1,
      title: "Frequently Asked Questions 1",
      response: "Response 1",
      type: "AI Generated",
      created: "Aug 1, 2024 12:02 PM",
    },
    {
      id: 2,
      title: "Frequently Asked Questions 2",
      response: "Response 2",
      type: "AI Generated",
      created: "Aug 1, 2024 12:02 PM",
    },
  ]);

  const [searchQuestion, setSearchQuestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingResponse, setEditingResponse] = useState("");
  const [createQuestion, setCreateQuestion] = useState(false);
  const [createTitle, setCreateTitle] = useState("");
  const [createResponse, setCreateResponse] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [toggleId, setToggleId] = useState(null);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleAddQuestion = () => {
    setEditingId(null);
    setCreateQuestion(true);
  };
  const handleSaveCreate = () => {
    const newFrecuentQuestions = [...frecuentQuestions];
    const newId = newFrecuentQuestions.length + 1;
    newFrecuentQuestions.push({
      id: newId,
      title: createTitle,
      response: createResponse,
      type: "Create",
      created: "Aug 1, 2024 12:02 PM",
    });
    setFrecuentQuestions(newFrecuentQuestions);

    setCreateQuestion(false);
    setCreateTitle("");
    setCreateResponse("");
  };
  const handleCancelCreate = () => {
    setCreateQuestion(false);
  };

  const handleEditQuestion = (id) => {
    const questionToEdit = frecuentQuestions.find(
      (question) => question.id === id
    );
    setEditingId(id);
    setEditingTitle(questionToEdit.title);
    setEditingResponse(questionToEdit.response);
  };
  const handleSaveEdit = () => {
    const updatedQuestions = frecuentQuestions.map((question) =>
      question.id === editingId
        ? { ...question, title: editingTitle, response: editingResponse }
        : question
    );
    setFrecuentQuestions(updatedQuestions);

    setEditingId(null); // Salir del modo de edición
  };
  const handleCancelEdit = () => {
    setEditingId(null); // Cancelar la edición
  };

  const handleDeleteQuestion = (id) => {
    const newFrecuentQuestions = frecuentQuestions.filter(
      (question) => question.id !== id
    );
    setFrecuentQuestions(newFrecuentQuestions);
  };

  const handleSetToDelete = (id) => {
    setQuestionToDelete(id);
  };

  const handleRemoveToDelete = () => {
    setQuestionToDelete(null);
  };

  const handleDeleteAll = () => {
    setFrecuentQuestions([]);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    if (searchTerm === "") {
      setSearchQuestion([]);
    } else {
      const filteredQuestions = frecuentQuestions.filter((question) =>
        question.title.toLowerCase().includes(searchTerm)
      );
      setSearchQuestion(filteredQuestions);
      console.log(filteredQuestions);
    }
  };

  const handleToggleDisplay = (id) => {
    setToggleId(id);
  };

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 my-4 mx-2 w-full bg-[#f6f9ff]">
        {frecuentQuestions.length > 0 && (
          <>
            <div className="justify-center rounded-lg border border border-gray-900/25 px-6 py-6">
              <div className="pb-4 flex flex-wrap items-center justify-between max-w-screen-xl m-auto mx-auto gap-y-2 border-b-2 border-[#eaeaea]">
                <div className="flex justify-between items-center w-full">
                  <h2 className="font-bold flex">
                    {/* <span ref={props.contentRef} /> */}{" "}
                    <span className="font-black pr-2">Topic</span> Frequently
                    Asked Questions
                  </h2>
                  <div>
                    <button
                      onClick={() => {
                        togglePopup();
                      }}
                      className="flex gap-2 items-center border rounded-md py-2 px-6 border-[#001238] font-bold text-sm content-center"
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-18zm5 2v3h-4V5h4zm-4 9v-4h4v4h-4zm0 2h4v3h-4v-3zm6 0h10v3h-10v-3zm10-2h-10v-4h10v4zm0-9v3h-10V5h10z"
                          fill="#001238"
                        />
                      </svg>
                      Manage
                    </button>
                  </div>
                </div>
                {/* <div className="flex gap-x-4">
              <span className="block border rounded-full py-2 px-6 bg-[#eaeaea] text-[#4f4f4f] font-bold text-sm content-center">
                <Image src="/icons/questionnaire-line.png" width={20} height={20} className="inline-block" alt="icon" /> {frecuentQuestions.length} Questions
              </span>
              <button
                onClick={() => {
                  togglePopup();
                }}
                className="border rounded-full py-2 px-6 border-black font-bold text-sm content-center"
              >
                Manage
              </button>
              <button
                onClick={() => {
                  handleDeleteAll();
                }}
                className="border rounded-full py-2 px-6 border-black font-bold text-sm content-center"
              >
                Delete All
              </button>
            </div> */}
              </div>
              <div className="grid grid-cols-6 gap-4 py-4 border-b-2 border-[#eaeaea] text-[#898989] font-bold text-sm">
                <div className="col-span-4">
                  <div className="flex items-center gap-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z"
                        fill="#FF5C1B"
                      />
                    </svg>
                    <span className="text-[#000b1a]	font-bold">
                      Question ({frecuentQuestions.length})
                    </span>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                        fill="#FF5C1B"
                      />
                    </svg>
                    <span className="text-[#000b1a]	font-bold">Created</span>
                  </div>
                </div>
              </div>
              <div className="max-h-32 overflow-y-auto">
                {frecuentQuestions.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-6 gap-4 py-4 border-b-2 border-[#eaeaea] font-bold text-sm"
                  >
                    <div className="col-span-4">
                      <p>{item.title}</p>
                    </div>
                    <div className="col-span-2">
                      <p>{item.created}</p>
                    </div>
                  </div>
                ))}
              </div>
              {frecuentQuestions.length === 0 && (
                <p className="text-center text-gray-500">No records found</p>
              )}
            </div>            
          </>
        )}
        {frecuentQuestions.length === 0 && (
          <div className="justify-center rounded-lg border border border-gray-900/25 px-6 py-6 text-center inline-grid gap-3">
            <div className="flex">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M9.604 28.333h23.729v-20H6.666v22.309l2.938-2.309zm1.153 3.334L3.333 37.5V6.667C3.333 5.747 4.079 5 5 5h30c.92 0 1.666.746 1.666 1.667V30c0 .92-.746 1.667-1.666 1.667H10.757zm7.576-8.334h3.333v3.334h-3.333v-3.334zm-4.054-8.644A5.833 5.833 0 1 1 20 21.667h-1.667v-3.334H20a2.5 2.5 0 1 0-2.452-2.99l-3.27-.654z"
                  fill="#001238"
                />
              </svg>
            </div>
            <h2 className="text-[#001238] text-2xl font-bold pt-3">
              You have no questions
            </h2>
            <p className="text-center text-[#001238] py-3">
              Would you like us to help you suggesting a couple of questions?
            </p>
            <div className="flex">
              <button
                onClick={() => {
                  togglePopup();
                }}
                className="mx-auto flex gap-2 border rounded-xl py-2 px-4 bg-[#d6f898] border-[#d6f898] text-[#001238] font-extrabold text-sm items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z"
                    fill="#001238"
                  />
                </svg>
                Add Question
              </button>
            </div>
          </div>
        )}
        <AnimatePresence>
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99999]">
                  <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-6xl">
                    <div className="justify-center">
                      <div className="pb-4 flex flex-wrap items-center justify-between max-w-screen-xl m-auto mx-auto gap-y-2 gap-x-4">
                        <div>
                          <h2 className="font-black text-[#001238]">
                            <b>Topic</b> - Frequently Asked Questions
                          </h2>
                        </div>
                        <div className="flex gap-x-4">
                          {!createQuestion && (
                            <>
                              <span className="block border rounded-full py-2 px-6 border-[#eaeaea] bg-white text-[#808995] font-semibold text-sm content-center">
                                {frecuentQuestions.length} Questions
                              </span>
                              {!createQuestion && (
                                <button
                                  onClick={handleAddQuestion}
                                  className="border rounded-xl py-2 px-4 bg-[#d6f898] border-[#d6f898] text-[#001238] font-bold text-sm content-center"
                                >
                                  <FaPlus
                                    color="#001238"
                                    className="text-[#001238] inline-block mr-2"
                                  />
                                  {/* <Image src="/icons/add-line.png" width={20} height={20} className="inline-block" alt="icon" />  */}
                                  Add a New
                                </button>
                              )}
                              {/* <input
                            type="text"
                            placeholder="Search"
                            onChange={handleSearch}
                            className="w-[15rem] border border-[#eaeaea] bg-[#eaeaea] rounded-md px-3 py-1"
                          /> */}
                              <div className="relative flex items-center">
                                <span className="absolute left-3">
                                  <svg
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="m14.88 12.463 3.366 3.212-1.111 1.06-3.365-3.212A7.253 7.253 0 0 1 9.357 15c-3.904 0-7.072-3.024-7.072-6.75S5.453 1.5 9.357 1.5c3.903 0 7.071 3.024 7.071 6.75 0 1.593-.58 3.058-1.547 4.213zm-1.575-.557a5.112 5.112 0 0 0 1.552-3.656c0-2.9-2.462-5.25-5.5-5.25-3.04 0-5.5 2.35-5.5 5.25s2.46 5.25 5.5 5.25a5.62 5.62 0 0 0 3.83-1.482l.118-.112z"
                                      fill="#808995"
                                    />
                                  </svg>
                                </span>
                                <input
                                  type="text"
                                  placeholder="Search"
                                  onChange={handleSearch}
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </>
                          )}

                          <button onClick={togglePopup}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 27.5C8.096 27.5 2.5 21.904 2.5 15S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5zm0-2.5c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm0-11.768 3.535-3.535 1.768 1.768L16.768 15l3.535 3.535-1.768 1.768L15 16.768l-3.536 3.535-1.767-1.768L13.232 15l-3.535-3.536 1.768-1.767L15 13.232z"
                                fill="#2C5EF9"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {createQuestion ? (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="col-span-6 w-[54rem] bg-[#f5f8ff] p-4 rounded-xl"
                          >
                            <>
                              <span className="font-bold text-[#001238] pb-2 block font-base">
                                Type a Question
                              </span>
                              <input
                                type="text"
                                value={createTitle}
                                onChange={(e) => setCreateTitle(e.target.value)}
                                placeholder="Question"
                                className="w-full border rounded-lg bg-white px-2 py-4 mb-2"
                              />

                              <div className="flex justify-between mb-2">
                                <span className="text-left font-bold text-[#001238] block content-center font-base">
                                  Add an Answer
                                </span>
                                <span className="gap-2 flex items-center text-right font-bold text-[#001238] py-1 px-6 block border border-[#d6f898] rounded-xl bg-[#d6f898] cursor-pointer text-sm">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.666 3.698c1.122 0 2.032-.91 2.032-2.031h.937c0 1.121.91 2.03 2.031 2.03v.938c-1.122 0-2.03.91-2.03 2.032h-.938c0-1.122-.91-2.032-2.032-2.032v-.937zM.833 9.166a5 5 0 0 0 5-5H7.5a5 5 0 0 0 5 5v1.667a5 5 0 0 0-5 5H5.833a5 5 0 0 0-5-5V9.166zm3.23.834a6.698 6.698 0 0 1 2.603 2.603A6.698 6.698 0 0 1 9.27 10a6.698 6.698 0 0 1-2.604-2.603A6.698 6.698 0 0 1 4.063 10zm10.312 1.666a2.708 2.708 0 0 1-2.709 2.709v1.25a2.708 2.708 0 0 1 2.709 2.708h1.25a2.708 2.708 0 0 1 2.708-2.708v-1.25a2.708 2.708 0 0 1-2.708-2.709h-1.25z"
                                      fill="#001238"
                                    />
                                  </svg>
                                  Generate
                                </span>
                              </div>

                              <textarea
                                value={createResponse}
                                placeholder="Response"
                                onChange={(e) =>
                                  setCreateResponse(e.target.value)
                                }
                                className="w-full border rounded-lg bg-white px-2 py-1"
                              />

                              <div className="flex justify-center gap-2 mt-2">
                                <button
                                  disabled={!createTitle || !createResponse}
                                  onClick={handleSaveCreate}
                                  className={`${
                                    !createTitle || !createResponse
                                      ? "bg-gray-500 border border-gray-500"
                                      : "border-[#d6f898] bg-[#d6f898]"
                                  } text-[#001238] border px-8 py-2 rounded-xl font-semibold`}
                                >
                                  Save
                                </button>
                                <button
                                  onClick={handleCancelCreate}
                                  className="bg-white border text-[#001238] border-[#001238] px-8 py-2 rounded-xl font-semibold"
                                >
                                  Cancel
                                </button>
                              </div>
                            </>
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <div className="max-h-96 min-h-40 overflow-y-auto">
                            {frecuentQuestions.length === 0 && (
                              <p className="text-center text-gray-500">
                                No records found
                              </p>
                            )}
                            {searchQuestion.length > 0
                              ? searchQuestion.map((item) => (
                                  <div
                                    key={item.id}
                                    className="grid grid-cols-6 gap-4 py-4 border-b-2 border-[#eaeaea] font-bold text-sm"
                                  >
                                    <div className="col-span-5">
                                      {editingId === item.id ? (
                                        <>
                                          <input
                                            type="text"
                                            value={editingTitle}
                                            onChange={(e) =>
                                              setEditingTitle(e.target.value)
                                            }
                                            className="w-full border rounded px-2 py-1 mb-2"
                                          />
                                          <textarea
                                            value={editingResponse}
                                            onChange={(e) =>
                                              setEditingResponse(e.target.value)
                                            }
                                            className="w-full border rounded px-2 py-1"
                                          />
                                          <div className="flex justify-end gap-2 mt-2">
                                            <button
                                              onClick={handleSaveEdit}
                                              className="bg-black text-white px-4 py-2 rounded"
                                            >
                                              Save
                                            </button>
                                            <button
                                              onClick={handleCancelEdit}
                                              className="bg-gray-500 text-white px-4 py-2 rounded"
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <p>{item.title}</p>
                                          <p className="font-normal text-black truncate">
                                            {item.response}
                                          </p>
                                        </>
                                      )}
                                    </div>

                                    <div className="col-span-1 flex m-auto gap-x-4">
                                      <span className="text-black group-hover:text-black group-hover:bg-white rounded-md cursor-pointer transition duration-300 content-center">
                                        <FaPen
                                          onClick={() =>
                                            handleEditQuestion(item.id)
                                          }
                                          className="w-4 h-4"
                                        />
                                      </span>
                                      <span className="text-black group-hover:text-black group-hover:bg-white rounded-md cursor-pointer transition duration-300">
                                        <MdDeleteForever
                                          onClick={() =>
                                            handleSetToDelete(item.id)
                                          }
                                          className="w-6 h-6"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                ))
                              : frecuentQuestions.map((item) =>
                                  questionToDelete === item.id ? (
                                    <div
                                      key={item.id}
                                      className="grid grid-cols-6 gap-4 px-3 py-4 border rounded-lg border-[#001238] bg-[#001238] font-bold text-sm my-3"
                                    >
                                      <>
                                        <div className="col-span-4 content-center">
                                          <p className="font-medium text-white">
                                            Are you sure you want to delete this
                                            question?
                                          </p>
                                        </div>
                                        <div className="col-span-2 flex m-auto gap-x-4">
                                          <span
                                            className="py-1 px-8 bg-[#d6f898] border text-[#001238] border-[#d6f898] rounded-md cursor-pointer"
                                            onClick={() =>
                                              handleDeleteQuestion(item.id)
                                            }
                                          >
                                            Yes
                                          </span>

                                          <span
                                            className="py-1 px-8 bg-[#001238] border text-[#d6f898] border-[#d6f898] rounded-md cursor-pointer"
                                            onClick={() =>
                                              handleRemoveToDelete(item.id)
                                            }
                                          >
                                            No
                                          </span>
                                        </div>
                                      </>
                                    </div>
                                  ) : (
                                    <div
                                      key={item.id}
                                      className="bg-[#f5f8ff] grid grid-cols-6 gap-4 px-3 py-4 border rounded-lg border-[#0000000c] font-bold text-sm my-3"
                                    >
                                      {editingId === item.id ? (
                                        <div className="col-span-6 cursor-pointer">
                                          <>
                                            <span className="font-black text-[#001238] pb-2 block text-base">
                                              Question
                                            </span>
                                            <input
                                              type="text"
                                              value={editingTitle}
                                              onChange={(e) =>
                                                setEditingTitle(e.target.value)
                                              }
                                              className="w-full border rounded-lg bg-white px-2 py-4 mb-2 font-medium"
                                            />

                                            <span className="font-black text-[#001238] pb-2 block text-base">
                                              Answer
                                            </span>
                                            <textarea
                                              value={editingResponse}
                                              onChange={(e) =>
                                                setEditingResponse(
                                                  e.target.value
                                                )
                                              }
                                              className="w-full border rounded-lg bg-white px-2 py-4 font-medium	"
                                            />
                                            <div className="flex justify-center gap-2 mt-2">
                                              <button
                                                onClick={handleSaveEdit}
                                                className="text-[#001238] border border-[#d6f898] bg-[#d6f898] px-8 py-2 rounded-xl font-bold"
                                              >
                                                Save
                                              </button>
                                              <button
                                                onClick={handleCancelEdit}
                                                className="bg-white border text-[#001238] border-[#001238] px-8 py-2 rounded-xl font-bold"
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </>
                                        </div>
                                      ) : (
                                        <>
                                          <div
                                            className="col-span-5 cursor-pointer"
                                            onClick={() =>
                                              handleToggleDisplay(item.id)
                                            }
                                          >
                                            <p className="font-bold text-[#001238]">
                                              {item.title}
                                            </p>
                                            <div
                                              className={`${
                                                toggleId === item.id
                                                  ? ""
                                                  : "truncate"
                                              } font-semibold text-[#808995] pt-2`}
                                            >
                                              {item.response}
                                            </div>
                                          </div>
                                          <div className="col-span-1 flex m-auto gap-x-4">
                                            <span className="p-1 text-black group-hover:text-black group-hover:bg-white rounded-full cursor-pointer transition duration-300 bg-white rounded-full">
                                              {/* <FaPen
                                      onClick={() =>
                                        handleEditQuestion(item.id)
                                      }
                                      className="w-4 h-4"
                                    /> */}
                                              <svg
                                                onClick={() =>
                                                  handleEditQuestion(item.id)
                                                }
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="m13.107 7.98-1.179-1.179-7.761 7.762v1.178h1.178l7.762-7.761zm1.178-1.179 1.179-1.178-1.179-1.179-1.178 1.179 1.178 1.178zm-8.25 10.607H2.5v-3.536L13.696 2.678a.833.833 0 0 1 1.178 0l2.357 2.357a.833.833 0 0 1 0 1.178L6.036 17.408z"
                                                  fill="#2C5EF9"
                                                ></path>
                                              </svg>
                                            </span>
                                            <span className="p-1 text-black group-hover:text-black group-hover:bg-white rounded-full cursor-pointer transition duration-300 bg-white rounded-full">
                                              {/* <MdDeleteForever
                                      onClick={() =>
                                        handleSetToDelete(item.id)
                                      }
                                      className="w-6 h-6"
                                    /> */}
                                              <svg
                                                onClick={() =>
                                                  handleSetToDelete(item.id)
                                                }
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M5.834 3.333V1.666h8.333v1.667h4.167V5h-1.667v12.5c0 .46-.373.833-.833.833H4.167a.833.833 0 0 1-.833-.833V5H1.667V3.333h4.167zM5 5v11.666h10V5H5zm2.5 2.5h1.667v6.666H7.5V7.5zm3.334 0H12.5v6.666h-1.666V7.5z"
                                                  fill="#2C5EF9"
                                                />
                                              </svg>
                                            </span>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )
                                )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
      </div>
    </div>
  );
};

export const FaqEditor = createReactBlockSpec(
  {
    type: "faq",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
    },
    content: "none", // inline
  },
  {
    render: (props) => <FaqComponent {...props} />,
  }
);
