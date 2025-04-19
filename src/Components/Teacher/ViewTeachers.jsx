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
import "./ViewTeachers.css";

const ViewTeachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      firstname: "Suhas",
      lastname: "H",
      email: "suhas@gmail.com",
      phoneno: 1223,
      address: "Bangalore",
      semester: 2,
      section: 4,
    },
    {
      id: 2,
      firstname: "Rajesh",
      lastname: "Kumar",
      email: "rajesh@gmail.com",
      phoneno: 4567,
      address: "Hyderabad",
      semester: 3,
      section: 1,
    },
    // Add more teacher data as needed
  ]);

  const handleUpdate = (id) => {
    alert(`Update teacher with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <Container maxWidth="lg" className="teacher-container">
      <Paper className="teacher-paper" elevation={6}>
        <Typography variant="h4" className="teacher-title">
          All Teachers
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table className="teacher-table">
            <TableHead>
              <TableRow className="teacher-header">
                <TableCell><strong>First Name</strong></TableCell>
                <TableCell><strong>Last Name</strong></TableCell>
                <TableCell><strong>Email Id</strong></TableCell>
                <TableCell><strong>Phone NO</strong></TableCell>
                <TableCell><strong>Address</strong></TableCell>
                <TableCell><strong>Semester</strong></TableCell>
                <TableCell><strong>Section</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher, index) => (
                <TableRow
                  key={teacher.id}
                  className={index % 2 === 0 ? "teacher-row" : "teacher-row-alt"}
                >
                  <TableCell>{teacher.firstname}</TableCell>
                  <TableCell>{teacher.lastname}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.phoneno}</TableCell>
                  <TableCell>{teacher.address}</TableCell>
                  <TableCell>{teacher.semester}</TableCell>
                  <TableCell>{teacher.section}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn update"
                      onClick={() => handleUpdate(teacher.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn delete"
                      onClick={() => handleDelete(teacher.id)}
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

export default ViewTeachers;