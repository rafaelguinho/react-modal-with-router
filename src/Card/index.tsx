import React from "react";

const Card = () => {
  return (
    <div className="w-56 pb-2 mt-8 mx-4 bg-white rounded-md border border-gray-200 overflow-hidden shadow-lg">
      <div className="flex flex-col items-center py-4 px-2 bg-gray-300">
        <h1 className="text-lg font-medium text-gray-600 mt-2">
          Andrew Garfield
        </h1>
      </div>
      <div className="px-2 py-2"></div>
    </div>
  );
};

export default Card;
