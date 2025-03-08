import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  provider: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model("Service", serviceSchema);
