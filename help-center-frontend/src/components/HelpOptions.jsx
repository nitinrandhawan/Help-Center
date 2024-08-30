import React, { useContext, useEffect } from "react";
import axios from "axios";
import { CardContext } from "../App";
import NotFoundCard from "./NotFoundCard";

const HelpOptions = ({ searchVal }) => {
  let { options, setoptions } = useContext(CardContext);
  const GetAllCards = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cards`);
      return setoptions(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    setoptions([])
    GetAllCards();
  }, []);

  return (
    <>
      {options.length === 0 ? (
        <NotFoundCard />
      ) : (
        <section className="py-16">
          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto "
            }
          >
            {options.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {option.title}
                </h2>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        
          { searchVal && searchVal.current && searchVal.current.value.length >= 1 ? (
            <div className="flex items-center justify-center">
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 rounded "
                onClick={() => (window.location.href = "/")}
              >
                Go Back Home
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
      )}
    </>
  );
};

export default HelpOptions;
