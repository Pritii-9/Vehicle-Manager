import React from "react";

const MenuItem = ({ label, onClick }) => {
  return (
    <li
      className="mt-2 cursor-pointer hover:text-blue-400 py-2 px-3 bg-gray-300 rounded"
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default MenuItem;
