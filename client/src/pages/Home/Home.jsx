import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, Container } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Local Service Finder
          </Typography>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "100px 20px ",
        backgroundColor: "#f5f5f5",
        minHeight: "50vh",
        position:"relative",
        top:"180px",
        zIndex:-10
      }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
          Find Trusted Local Services Easily
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", marginTop: 2 }}>
          Book verified professionals for all your needs.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ marginTop: 4, backgroundColor: "#096C6C" }} 
          onClick={() => navigate("/services")}
        >
          Explore Services
        </Button>
      </div>

      {/* Why Choose Us? */}
      <Container sx={{ paddingY: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4 }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Verified Professionals</Typography>
                <Typography>All service providers are verified & background checked.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Easy Booking</Typography>
                <Typography>Book services quickly with a few clicks.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Affordable Pricing</Typography>
                <Typography>Get the best rates with quality service.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* How It Works? */}
      <Container sx={{ paddingY: 5, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4 }}>
          How It Works?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>1. Choose a Service</Typography>
                <Typography>Browse through available local services.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>2. Book an Appointment</Typography>
                <Typography>Select a date and time that works for you.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>3. Get the Service</Typography>
                <Typography>A professional will arrive and complete the job.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container sx={{ paddingY: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 4 }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>John Doe</Typography>
                <Typography>"Great service! The plumber arrived on time and fixed the issue perfectly!"</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Sarah Williams</Typography>
                <Typography>"Quick and professional! Highly recommend this platform for local services."</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Michael Lee</Typography>
                <Typography>"Found a reliable electrician in minutes. Booking was super easy!"</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#096C6C", color: "#fff" }}>
        <Typography variant="body1">© 2025 Local Service Finder. All Rights Reserved.</Typography>
        <Typography variant="body2">Contact us at support@localservices.com</Typography>
      </footer>
    </div>
  );
};

export default HomePage;
