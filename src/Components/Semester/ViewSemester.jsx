import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box
} from "@mui/material";
import "./ViewSemester.css";

const ViewSemester = () => {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: "B Tech 1st Year - SEM 1",
      description: "B Tech 1st Year - SEM 1"
    },
    {
      id: 2,
      name: "B Tech 1st Year - SEM 2",
      description: "B Tech 1st Year - SEM 2"
    },
    {
      id: 3,
      name: "B Tech 2nd Year - SEM 1",
      description: "B Tech 2nd Year - SEM 1"
    }
  ]);

  const handleUpdate = (id) => {
    alert(`Update semester with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setSemesters(semesters.filter((s) => s.id !== id));
  };

  const handleCourses = (id) => {
    alert(`Courses for semester ID: ${id}`);
  };

  const handleSections = (id) => {
    alert(`Sections for semester ID: ${id}`);
  };

  return (
    <Container maxWidth="lg" className="semester-container">
      <Paper className="semester-paper" elevation={6}>
        <Typography variant="h4" className="semester-title">
          All Semesters
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table className="semester-table">
            <TableHead>
              <TableRow className="semester-header">
                <TableCell><strong>Semester Id</strong></TableCell>
                <TableCell><strong>Semester Name</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {semesters.map((semester, index) => (
                <TableRow
                  key={semester.id}
                  className={index % 2 === 0 ? "semester-row" : "semester-row-alt"}
                >
                  <TableCell>{semester.id}</TableCell>
                  <TableCell>{semester.name}</TableCell>
                  <TableCell>{semester.description}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn update"
                      onClick={() => handleUpdate(semester.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn delete"
                      onClick={() => handleDelete(semester.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn courses"
                      onClick={() => handleCourses(semester.id)}
                    >
                      Courses
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn sections"
                      onClick={() => handleSections(semester.id)}
                    >
                      Sections
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Container>
  );
};

export default ViewSemester;