import React from "react";

const Card = ({ vehicles = [], VehicleType = "Unknown Type" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 w-full"> 
      <h3 className="text-lg font-bold text-gray-800 mb-4">{VehicleType}</h3>
      {vehicles.length > 0 ? (
        <div className="overflow-x-auto"> 
          <table className="min-w-full leading-normal"> 
            <thead>
              <tr>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Vehicle Number
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Owner Name
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Vehicle Name
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Fuel Type
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mileage
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.Vehiclenumber || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.OwnerName || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.VehicleName || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.capacity || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.FuelType || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.year || "N/A"}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-200 bg-white text-sm">
                    {vehicle.mileage || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No vehicles available to display.</p>
      )}
    </div>
  );
};

export default Card;