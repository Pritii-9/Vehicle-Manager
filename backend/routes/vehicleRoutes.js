import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// Create a new vehicle
router.post("/", async (req, res) => {
  try {
    console.log("Request body received:", req.body); // Debugging log
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    console.error("Error saving vehicle:", error.message);
    res.status(500).json({ message: "Error adding vehicle", error: error.message });
  }
});

export default router;