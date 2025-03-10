import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Typography, Card, CardContent, Avatar, Container, TextField } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  
  useEffect(() => {
    // Fetch user details (Replace 'user123' with actual user authentication system)
    axios.get("http://localhost:5000/api/user/user123")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user data:", err));

    // Fetch user bookings
    axios.get("http://localhost:5000/api/bookings/user123")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedUser(user);
  };

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.put("http://localhost:5000/api/user/user123", updatedUser)
      .then(() => {
        setUser(updatedUser);
        setEditMode(false);
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Local Service Finder</Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 5 }}>
        {user && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card sx={{ padding: 3, textAlign: "center" }}>
              <Avatar sx={{ width: 80, height: 80, margin: "auto" }}>{user.name.charAt(0)}</Avatar>
              {editMode ? (
                <>
                  <TextField label="Name" name="name" value={updatedUser.name} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                  <TextField label="Email" name="email" value={updatedUser.email} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                  <TextField label="Phone" name="phone" value={updatedUser.phone} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
                  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave}>Save</Button>
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ mt: 2 }}>{user.name}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography variant="body1">Phone: {user.phone}</Typography>
                  <Button variant="contained" sx={{ mt: 2 }} onClick={handleEdit}>Edit Profile</Button>
                </>
              )}
            </Card>
          </motion.div>
        )}

        <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>My Bookings</Typography>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <motion.div key={booking._id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card sx={{ marginBottom: 2, padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Service: {booking.serviceId?.name || "Unknown"}</Typography>
                  <Typography>Date: {booking.date}</Typography>
                  <Typography>Time: {booking.time}</Typography>
                  <Typography>Status: {booking.status}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <Typography variant="body1">No bookings found.</Typography>
        )}
      </Container>
    </div>
  );
};

export default ProfilePage;
