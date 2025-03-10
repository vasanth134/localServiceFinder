import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Firebase authentication
      // const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Save user in MongoDB
      await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        firebaseUid: result.user.uid,  // Save Firebase UID
      });

      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/dashboard");
    } catch (error) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#096C6C", textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}>Register</Typography>
      <Box sx={{ width: "400px", padding: "30px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "20px", textAlign: "center", color: "#fff" }}>
        <form onSubmit={handleRegister}>
          <TextField label="Full Name" variant="filled" fullWidth required sx={{ mb: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Email" type="email" variant="filled" fullWidth required sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" variant="filled" fullWidth required sx={{ mb: 3 }} value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <Typography color="error" sx={{ fontSize: "14px", mb: 2 }}>{error}</Typography>}
          <Button type="submit" variant="contained" sx={{ width: "100%", borderRadius: "10px", backgroundColor: "#096C6C", color: "#fff", fontWeight: "bold" }}>Register</Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
