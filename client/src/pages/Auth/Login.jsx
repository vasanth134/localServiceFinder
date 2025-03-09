import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";

// Floating text words
const floatingTexts = [
  "Plumbing",
  "Electrician",
  "Carpentry",
  "Cleaning",
  "Painting",
  "Home Services",
  "Reliable",
  "Professional",
  "Fast Service",
  "Book Now",
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      setError("Google login failed. Try again.");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "98vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #096C6C, #ADD8E6)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Animated Text */}
      {floatingTexts.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: Math.random() * 200 - 100, x: Math.random() * 200 - 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [Math.random() * -100, Math.random() * 100, Math.random() * -100],
            x: [Math.random() * -50, Math.random() * 50, Math.random() * -50],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            position: "absolute",
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(0, 0, 0)",
            pointerEvents: "none",
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* App Name */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#fff",
          mb: 3,
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        Local Service Finder
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(15px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome Back
        </Typography>

        <form onSubmit={handleEmailLogin}>
          <TextField
            label="Email"
            type="email"
            variant="filled"
            fullWidth
            required
            sx={{ borderRadius: "10px", background: "rgba(255,255,255,0.3)", mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            required
            sx={{ borderRadius: "10px", background: "rgba(255,255,255,0.3)", mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" sx={{ fontSize: "14px", mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "#096C6C",
              color: "#fff",
              fontWeight: "bold",
              mb: 2,
              "&:hover": { backgroundColor: "#085858" },
            }}
          >
            Login
          </Button>
        </form>

        <Button
          variant="contained"
          onClick={handleGoogleLogin}
          sx={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#EA4335",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            "&:hover": { backgroundColor: "#c1351a" },
          }}
        >
          <GoogleIcon /> Sign in with Google
        </Button>
      </motion.div>
    </Box>
  );
};

export default LoginPage;
