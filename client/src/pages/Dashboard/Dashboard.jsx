import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <div>
      {/* ✅ Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Local Service Finder</Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/services">Services</Button>
          {/* <Button color="inherit" href="/dashboard">Dashboard</Button> */}
          <Button color="inherit" href="/profile">Profile</Button>
        </Toolbar>
      </AppBar>

      {/* ✅ Dashboard Content */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>All Bookings</Typography>

        {/* ✅ Booking Table */}
        <TableContainer component={Paper} sx={{ backgroundColor: "#ADD8E6", borderRadius: 2, padding: 2 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#096C6C" }}>
              <TableRow>
                {/* <TableCell sx={{ color: "white" }}>User</TableCell> */}
                <TableCell sx={{ color: "white" }}>Service</TableCell>
                <TableCell sx={{ color: "white" }}>Date</TableCell>
                <TableCell sx={{ color: "white" }}>Time</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <TableRow key={booking._id}>
                    {/* <TableCell>{booking.userId?.name || "Unknown"}</TableCell> */}
                    <TableCell>{booking.serviceId?.name || "Unknown"}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>{booking.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">No bookings found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Dashboard;
