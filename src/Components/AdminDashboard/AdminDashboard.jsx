import React from "react";
import { Typography, Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Effortless schedules, organized learning.
      </Typography>
      <Typography variant="body1" paragraph>
        Elevate your education journey with our Timetable Management System.
      </Typography>
      <Typography variant="h6" color="primary">
        Explore now!
      </Typography>
      <Box sx={{ mt: 4 }}>
        <img
          src="/loginTTMS.png"
          alt="Timetable illustration"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
        />
      </Box>
    </Box>
  );
};

export default AdminDashboard;