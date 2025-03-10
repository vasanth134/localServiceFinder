import React from "react";
import { AppBar, Toolbar, Button, Typography, Container, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Local Service Finder</Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
          <Button color="inherit" href="/profile">Profile</Button>
        </Toolbar>
      </AppBar>

      {/* About Section */}
      <Container sx={{ marginTop: 5, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: 3 }}>
            Welcome to Local Service Finder, your go-to platform for connecting with reliable service providers.
            Our mission is to make it easy for users to find and book trusted professionals for various needs.
          </Typography>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card sx={{ maxWidth: 500, margin: "auto", padding: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Developer Details</Typography>
              <Typography variant="body1">👨‍💻 <strong>Name:</strong> Vijitha K.V</Typography>
              <Typography variant="body1">🎓 <strong>Degree:</strong> B.Sc Information Technology</Typography>
              <Typography variant="body1">📧 <strong>Email:</strong> vijithakv@gmail.com</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutPage;
