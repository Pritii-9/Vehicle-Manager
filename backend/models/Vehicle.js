import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Vehicle", VehicleSchema); // Use 'export default' for ESM syntax