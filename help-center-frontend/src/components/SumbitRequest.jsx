import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const SubmitRequest = ({ setRequestData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.classList.add("disable");

    axios
      .post(`http://localhost:5000/api/cards`, { title, description })
      .then(({ data }) => {
        setRequestData(data._id);
        e.target.classList.remove("disable");
        if (data) {
          setTimeout(() => {
            navigate("/");
          }, 300);
        }
      })
      .catch((err) => {
        console.log("error", err);
        navigate("/");
      });
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col items-center bg-purple-50 py-16">
        <h1 className="text-4xl font-bold mb-8">Submit a Request</h1>
        <form
          className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg"
              placeholder="Enter request title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg"
              placeholder="Describe your issue or request"
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2a384b] text-white font-medium text-lg py-3 rounded-lg hover:bg-[#1c2531] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SubmitRequest;
