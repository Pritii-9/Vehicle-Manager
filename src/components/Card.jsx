import React from "react";

const Card = ({ name, description, image, id, handleDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        onClick={() => handleDelete(id)} // Call handleDelete with the vehicle's ID
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;