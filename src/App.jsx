import React, { useState } from "react";
import MenuItem from "./Components/MenuItem";
import Card from "./Components/Card";

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuData, setMenuData] = useState({
    menu1: [],
    menu2: [],
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    name: "",
    description: "",
    image: "",
    manufacturer: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo({ ...vehicleInfo, [name]: value });
  };

  const handleAddVehicle = async () => {
    const { name, description, image, manufacturer, year } = vehicleInfo;

    if (!name || !description || !image || !manufacturer || !year) {
      alert("Please fill out all fields before adding the vehicle.");
      return;
    }

    try {
      // API request to send data to the backend
      const response = await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicleInfo),
      });

      if (response.ok) {
        const savedVehicle = await response.json();
        setMenuData((prev) => ({
          ...prev,
          [selectedMenu]: [...(prev[selectedMenu] || []), savedVehicle],
        }));
        setVehicleInfo({
          name: "",
          description: "",
          image: "",
          manufacturer: "",
          year: "",
        });
        alert("Vehicle added successfully!");
      } else {
        console.error("Failed to add vehicle:", await response.text());
        alert("Failed to add vehicle. Please try again.");
      }
    } catch (error) {
      console.error("Error adding vehicle:", error);
      alert("An error occurred. Please check your backend.");
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-white text-black-800 p-4 h-screen flex-shrink-0">
        <h2 className="text-lg font-bold">Home</h2>
        <ul>
          <MenuItem label="Menu item 1" onClick={() => setSelectedMenu("menu1")} />
          <MenuItem label="Menu item 2" onClick={() => setSelectedMenu("menu2")} />
          <MenuItem label="Menu item 3" onClick={() => setSelectedMenu(null)} />
        </ul>
      </aside>

      <main className="flex-1 bg-gray-200">
        <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6 shadow-md">
          <h1 className="text-2xl font-bold">Vehicle Manager</h1>
        </header>

        {selectedMenu && (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Vehicle Information</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <label className="block font-semibold mb-2 text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={vehicleInfo.name}
                  onChange={handleInputChange}
                  placeholder="Vehicle name"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">Description</label>
                <input
                  type="text"
                  name="description"
                  value={vehicleInfo.description}
                  onChange={handleInputChange}
                  placeholder="Vehicle description"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={vehicleInfo.image}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer"
                  value={vehicleInfo.manufacturer}
                  onChange={handleInputChange}
                  placeholder="Manufacturer"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-600">Year</label>
                <input
                  type="number"
                  name="year"
                  value={vehicleInfo.year}
                  onChange={handleInputChange}
                  placeholder="Year of manufacture"
                  className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="bg-[#5046e4] text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition-transform hover:scale-105 focus:ring-2 focus:ring-teal-300"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        )}

        {selectedMenu && menuData[selectedMenu].length > 0 && (
          <section className="p-6 grid gap-6 lg:grid-cols-2 md:grid-cols-1">
            {menuData[selectedMenu].map((item) => (
              <Card key={item.id} name={item.name} description={item.description} image={item.image} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
