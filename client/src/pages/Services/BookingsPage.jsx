import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography, Card, CardContent, Container, CircularProgress } from "@mui/material";
import axios from "axios";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "user123"; // Replace with actual user authentication system

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Local Service Finder</Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/services">Services</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>My Bookings</Typography>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card key={booking._id} sx={{ marginBottom: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6">Service: {booking.serviceId?.name || "Unknown"}</Typography>
                <Typography variant="body1">Date: {booking.date}</Typography>
                <Typography variant="body1">Time: {booking.time}</Typography>
                <Typography variant="body1">Status: {booking.status}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1">No bookings found.</Typography>
        )}
      </Container>
    </div>
  );
};

export default BookingsPage;
