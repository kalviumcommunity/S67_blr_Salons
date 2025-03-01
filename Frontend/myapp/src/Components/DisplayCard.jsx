import React from "react";

const DisplayCard = ({ title, description, location }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <span className="px-2 py-1 text-sm rounded">
        {location }
      </span>
    </div>
  );
};

export default DisplayCard;