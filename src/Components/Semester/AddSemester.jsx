import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import "./AddSemester.css";

const AddSemester = () => {
  const [semester, setSemester] = useState("");
  const [description, setDescription] = useState("");

  const handleAddSemester = () => {
    console.log("Semester:", semester);
    console.log("Description:", description);
    // Backend integration goes here
  };

  return (
    <>
      <Container maxWidth="sm" className="add-semester-container">
        <Paper elevation={6} className="add-semester-paper">
          <Typography variant="h4" className="form-title">
            🎓 Add New Semester
          </Typography>
          <Typography variant="subtitle1" className="form-subtitle">
            Plan your academic year with ease!
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Enter Semester"
              variant="outlined"
              margin="normal"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="input-field"
            />
            <TextField
              fullWidth
              label="Enter Semester Description"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field"
            />
            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddSemester}
                className="add-btn"
              >
                Add Semester
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default AddSemester;