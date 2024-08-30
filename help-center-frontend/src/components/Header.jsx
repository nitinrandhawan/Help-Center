import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl">Abstract | Help Center</div>
      <Link to="/submit-request">
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Submit a request</button>
      </Link>
    </header>
  );
};

export default Header;
