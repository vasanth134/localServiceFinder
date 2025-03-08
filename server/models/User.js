import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true }, // Google Auth ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String }, // Profile Picture URL
});

export default mongoose.model("User", UserSchema);
