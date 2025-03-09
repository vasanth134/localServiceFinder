import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Card,
  Container,
  Grid,
  Avatar,
  Rating,
  CircularProgress,
  TextField,
} from "@mui/material";
import axios from "axios";

const ServiceCardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState({ date: "", time: "" });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/services/${id}`
        );
        console.log("API Response:", response.data);
        setService(response.data);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Service not found");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        userId: id,
        serviceId: id,
        date: bookingDetails.date,
        time: bookingDetails.time,
      });
      alert("Booking successful!");
    } catch (err) {
      alert("Booking failed!");
    }
  };

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 3 }}
          onClick={() => navigate("/services")}
        >
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Local Service Finder
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/services")}>
            Services
          </Button>
        </Toolbar>
      </AppBar>

      {/* Service Card */}
      <Container sx={{ marginTop: 5 }}>
        <Card sx={{ padding: 3, textAlign: "center" }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Avatar
                src={service.image}
                alt={service.name}
                sx={{ width: 150, height: 150, margin: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" fontWeight={900}>
                {service?.description || "No description available"}
              </Typography>
              <Typography variant="body1">
                Provider: {service?.name || "N/A"}
              </Typography>
              <Typography variant="body1">
                Experience: {service?.experience || "N/A"}
              </Typography>
              <Typography variant="body1">
                Service Fee: {service?.price || "N/A"}
              </Typography>
              <Typography variant="body1">
                📞 {service?.contact?.phone || "No contact available"}
              </Typography>
              <Rating
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                }}
                value={service?.ratings || 0}
                precision={0.1}
                readOnly
              />

              {/* Booking Form */}
              <form onSubmit={handleBooking}>
                <TextField
                  label="Select Date"
                  type="date"
                  fullWidth
                  required
                  value={bookingDetails.date}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, date: e.target.value })
                  }
                  sx={{ marginTop: 2 }}
                />
                <TextField
                  label="Select Time"
                  type="time"
                  fullWidth
                  required
                  value={bookingDetails.time}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, time: e.target.value })
                  }
                  sx={{ marginTop: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: 3, backgroundColor: "#096C6C" }}
                >
                  Book Appointment
                </Button>
              </form>
            </Grid>
          </Grid>
        </Card>

        {/* Reviews Section */}
        <Typography variant="h6" fontWeight={900} sx={{ marginTop: 3 }}>
          Reviews:
        </Typography>
        {service?.reviews && service.reviews.length > 0 ? (
          service.reviews.map((review, index) => (
            <Card key={index} sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="body1">
                <strong>{review.author || "Anonymous"}:</strong> {review}
              </Typography>
            </Card>
          ))
        ) : (
          <Typography variant="body2">No reviews available</Typography>
        )}
      </Container>
    </div>
  );
};

export default ServiceCardPage;
