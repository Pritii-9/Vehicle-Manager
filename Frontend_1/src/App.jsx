import React, { useState } from "react";
import MenuItem from "./Components/MenuItem";
import Card from "./Components/Card";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null); // Initially, no menu is selected
  const [menuData, setMenuData] = useState({
    menu1: [],
    menu2: [],
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    VehicleType: "",
    OwnerName: "",
    VehicleName: "",
    capacity: "",
    FuelType: "",
    year: "",
    mileage: "",
    Vehiclenumber: "",
   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo({ ...vehicleInfo, [name]: value });
  };

  const handleVechicleMileage = (e) => {
    const { value } = e.target;
    const numericValue = Math.max(
      20,
      Math.min(parseInt(value, 10) || 20, 1000)
    );
    setVehicleInfo({ ...vehicleInfo, mileage: numericValue });
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const vehicleTypes = ["Car", "Truck", "Bike"];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [showFilteredVehicles, setShowFilteredVehicles] = useState(false);
  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false); // input card initially hidden

  const handleDropdownSelect = (type) => {
    setDropdownOpen(false);
    console.log(`Selected from dropdown: ${type}`);

    const allVehicles = Object.values(menuData).flat();
    const filtered = allVehicles.filter(
      (vehicle) => vehicle.VehicleType.toLowerCase() === type.toLowerCase()
    );
    setFilteredVehicles(filtered);
    setShowFilteredVehicles(true);
    setShowAddVehicleForm(false);
    setSelectedMenu(null);
  };

  const handleAddVehicle = () => {
    const { Vehiclenumber,OwnerName,VehicleName, VehicleType, capacity, FuelType, year, mileage } =
      vehicleInfo;

    if (
      !Vehiclenumber ||
      !OwnerName ||
      !VehicleName ||
      !VehicleType ||
      !capacity ||
      !FuelType ||
      !year ||
      !mileage 
      
    ) {
      alert("Please fill out all fields before adding the vehicle.");
      return;
    }

    const newVehicle = { ...vehicleInfo, id: Date.now() };

    setMenuData((prev) => ({
      ...prev,
      [selectedMenu]: [...(prev[selectedMenu] || []), newVehicle],
    }));
    setVehicleInfo({
      Vehiclenumber: "",
      OwnerName: "",
      VehicleName: "",
      VehicleType: "",
      capacity: "",
      FuelType: "",
      year: "",
      mileage: "",
      
    });

    alert("Vehicle added successfully!");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-white text-black-800 p-4 h-screen flex-shrink-0">
        <h2 className="text-lg font-bold">Home</h2>
        <ul className="mt-4 text-font-semibold">
          <MenuItem
            label="Add Vehicle"
            onClick={() => {
              setSelectedMenu("menu1");
              setShowFilteredVehicles(false);
              setShowAddVehicleForm(true);
            }}
          />
        </ul>
      </aside>

      <main className="flex-1 bg-gray-200">
        <header className="bg-skyBlue text-white p-6 shadow-md flex items-center justify-between">
          <h1 className="text-2xl font-bold">Vehicle Manager</h1>
        </header>

        {showAddVehicleForm && selectedMenu === "menu1" && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Vehicle Information
              </h2>
              <div className="relative">
                <button
                  type="button"
                  className="bg-blue text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition-transform hover:scale-105 focus:ring-2 focus:ring-teal-300"
                  onClick={toggleDropdown}
                >
                  Vehicle list
                </button>

                {isDropdownOpen && (
                  <ul className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg w-48 text-gray-700">
                    {vehicleTypes.map((type, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                        onClick={() => handleDropdownSelect(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
             
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Vehicle Number
                </label>
                <input
                  type="text"
                  name="Vehiclenumber"
                  value={vehicleInfo.Vehiclenumber}
                  onChange={handleInputChange}
                  placeholder="Vehicle Number"
                  required
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="OwnerName"
                  value={vehicleInfo.OwnerName}
                  onChange={handleInputChange}
                  placeholder="Enter Capacity of Vehicle"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  name="VehicleName"
                  value={vehicleInfo.VehicleName}
                  onChange={handleInputChange}
                  placeholder="Enter Your Vehicle Name"
                  required="true"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Vehicle Type
                </label>
                <input
                  type="text"
                  name="VehicleType"
                  value={vehicleInfo.VehicleType}
                  onChange={handleInputChange}
                  placeholder="Vehicle Type"
                  required
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Capacity
                </label>
                <input
                  type="text"
                  name="capacity"
                  value={vehicleInfo.capacity}
                  onChange={handleInputChange}
                  placeholder="Enter Capacity of Vehicle"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
             
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Fuel-Type
                </label>
                <select
                  name="FuelType"
                  value={vehicleInfo.FuelType}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="CNG">CNG</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  max={new Date().getFullYear()}
                  min={2000}
                  value={vehicleInfo.year}
                  onChange={handleInputChange}
                  placeholder="Year of Manufacture"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">
                  Mileage
                </label>
                <input
                  type="number"
                  name="mileage"
                  min={20}
                  max={1000}
                  value={vehicleInfo.mileage}
                  onChange={handleVechicleMileage}
                  placeholder="Enter Mileage"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="bg-blue text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition-transform hover:scale-105 focus:ring-2 focus:ring-teal-300"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        )}

{!showFilteredVehicles && selectedMenu !== "menu1" && selectedMenu && menuData[selectedMenu]?.length > 0 && (
    <section className="p-6 grid gap-6 lg:grid-cols-2 md:grid-cols-1">
      <Card vehicles={menuData[selectedMenu]} VehicleType={selectedMenu} />
    </section>
  )}
  {showFilteredVehicles && filteredVehicles.length > 0 && (
    <section className="p-6 grid gap-6 lg:grid-cols-2 md:grid-cols-1">
      <Card vehicles={filteredVehicles} VehicleType={filteredVehicles[0]?.VehicleType} />
    </section>
  )}
</main>
    </div>
  );
};

export default App;
