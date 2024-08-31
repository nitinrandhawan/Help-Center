import React, { useContext } from "react";
import axios from "axios";
import { CardContext } from "../App";
const SearchBar = ({searchVal}) => {
  let { setoptions } = useContext(CardContext);

  const handleSearchKeyDown = (e) => {
    if (e.keyCode === 13 ) {
      axios
        .get(`http://localhost:5000/api/cards/${e.target.value}`)
        .then(({ data }) => {
          setoptions(data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }

  const handleSumbitButton=()=>{ 
    axios
        .get(`http://localhost:5000/api/cards/${searchVal.current.value}`)
        .then(({ data }) => {
          setoptions(data);
        })
        .catch((err) => {
          console.log("error", err);
        });
     
    }
 
  return (
    <section className="bg-purple-100 py-16 text-center">
      <div className="w-max m-auto">
      <h1 className="text-5xl font-medium mb-7 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5  text-black ">How can we help?</h1>

      </div>

      <div className="relative mx-auto w-1/2">
        <input
          type="text"
          ref={searchVal}
          onKeyDown={handleSearchKeyDown}
          placeholder="Search"
          className="w-full border border-gray-300 p-4 rounded-full text-lg"
        />
        <button
          className="absolute right-4 top-4 text-xl"
          onClick={handleSumbitButton}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
