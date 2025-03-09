import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField, Grid, Card, CardContent, CardMedia, CardActionArea, Container } from "@mui/material";
import axios from "axios"; // Import Axios for API calls

const Services = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/services"); // Your backend API URL
        setServices(response.data); // Set fetched services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // Filter services based on search input
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#096C6C" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Local Service Finder
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Container sx={{ textAlign: "center", marginTop: 4 }}>
        <TextField
          label="Search Services"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 500 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>

      {/* Services List */}
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {filteredServices.map((service) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={service._id}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardActionArea component={Link} to={`/services/${service._id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.image}
                    alt={service.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.role}
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{ fontWeight: "bold" }}>
                      {service.experience}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
