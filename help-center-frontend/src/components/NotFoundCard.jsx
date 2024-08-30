import React from 'react';

const NotFoundCard = () => {
  return (
    <div className="flex items-center justify-center min-h-[392px] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
        <div className="text-gray-500 text-6xl mb-4">
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <h1 className="text-xl font-bold mb-2">Card Not Found</h1>
        <p className="text-gray-600">The card you're looking for doesn't exist or is currently unavailable.</p>
        <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 px-4 rounded "
                onClick={() => (window.location.href = "/")}
              >
                Go Back Home
              </button>
      </div>
     </div>
  );
};

export default NotFoundCard;
