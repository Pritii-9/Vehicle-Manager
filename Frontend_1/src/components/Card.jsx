import React from "react";

const Card = ({ name, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

// https://tse3.mm.bing.net/th?id=OIP.eOydo2eq6Z-DJ6rW0Cxh_QHaEK&pid=Api&P=0&h=1800
