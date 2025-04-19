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
import "./ViewCourses.css";

const ViewCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "B Tech 1st Year - SEM 1",
      description: "B Tech 1st Year - SEM 1",
      semester: 1
    },
    {
      id: 2,
      name: "B Tech 1st Year - SEM 2",
      description: "B Tech 1st Year - SEM 2",
      semester: 2
    },
    {
      id: 3,
      name: "B Tech 2nd Year - SEM 1",
      description: "B Tech 2nd Year - SEM 1",
      semester: 1
    }
  ]);

  const handleUpdate = (id) => {
    alert(`Update course with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((s) => s.id !== id));
  };

  return (
    <Container maxWidth="lg" className="course-container">
      <Paper className="course-paper" elevation={6}>
        <Typography variant="h4" className="course-title">
          All Courses
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table className="course-table">
            <TableHead>
              <TableRow className="course-header">
                <TableCell><strong>Course Id</strong></TableCell>
                <TableCell><strong>Course Name</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Semester</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => (
                <TableRow
                  key={course.id}
                  className={index % 2 === 0 ? "course-row" : "course-row-alt"}
                >
                  <TableCell>{course.id}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.description}</TableCell>
                  <TableCell>{course.semester}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn update"
                      onClick={() => handleUpdate(course.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn delete"
                      onClick={() => handleDelete(course.id)}
                    >
                      Delete
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

export default ViewCourses;