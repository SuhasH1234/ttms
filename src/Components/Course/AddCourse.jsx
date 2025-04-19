import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import "./AddCourse.css";

const AddCourse = () => {
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [semester, setSemester] = useState("");

  const handleAddCourse = () => {
    console.log("Course:", course);
    console.log("Description:", description);
    console.log("Semester:", semester);
  };

  return (
    <Container maxWidth="sm" className="add-course-container">
      <Paper elevation={6} className="add-course-paper">
        <Typography variant="h4" className="form-title">
          🎓 Add New Course
        </Typography>
        <Typography variant="subtitle1" className="form-subtitle">
          Plan your academic year with ease!
        </Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCourse();
          }}
        >
          <TextField
            fullWidth
            label="Enter course"
            variant="outlined"
            margin="normal"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="input-field"
          />
          <TextField
            fullWidth
            label="Enter Course Description"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
          <TextField
            fullWidth
            label="Enter Semester"
            variant="outlined"
            margin="normal"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="input-field"
          />
          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="add-btn"
            >
              Add Course
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddCourse;