import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  provider: {
    name: String,
    experience: String,
    contact: {
      phone: String,
    },
  },
  ratings: Number,
  reviews: [String],
  location: {
    address: String,
  },
  image: String,
});


const Service = mongoose.model("Service", serviceSchema);
export default Service;
