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
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./ViewSemester.css";

const ViewSemester = () => {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: "B Tech 1st Year - SEM 1",
      description: "B Tech 1st Year - SEM 1",
    },
    {
      id: 2,
      name: "B Tech 1st Year - SEM 2",
      description: "B Tech 1st Year - SEM 2",
    },
    {
      id: 3,
      name: "B Tech 2nd Year - SEM 1",
      description: "B Tech 2nd Year - SEM 1",
    },
  ]);

  const handleUpdate = (id) => {
    alert(`Update semester with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setSemesters((prev) => prev.filter((sem) => sem.id !== id));
  };

  const handleCourses = (id) => {
    alert(`View courses for semester ID: ${id}`);
  };

  const handleSections = (id) => {
    alert(`View sections for semester ID: ${id}`);
  };

  return (
    <Container maxWidth="lg" className="semester-container">
      <Paper elevation={6} className="semester-paper">
        <Typography variant="h4" className="semester-title">
          🎓 All Semesters
        </Typography>

        <Box sx={{ overflowX: "auto" }}>
          <Table className="semester-table">
            <TableHead>
              <TableRow className="semester-header">
                <TableCell><strong>Semester ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell align="center"><strong>Actions</strong></TableCell>
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
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
                      <Button
                        variant="contained"
                        size="small"
                        className="action-btn update"
                        startIcon={<EditIcon />}
                        onClick={() => handleUpdate(semester.id)}
                      >
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        size="small"
                        className="action-btn delete"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(semester.id)}
                      >
                        Delete
                      </Button>

                      <Button
                        variant="contained"
                        size="small"
                        className="action-btn courses"
                        startIcon={<PlaylistAddIcon />}
                        onClick={() => handleCourses(semester.id)}
                      >
                        Courses
                      </Button>

                      <Button
                        variant="contained"
                        size="small"
                        className="action-btn sections"
                        startIcon={<FormatListBulletedIcon />}
                        onClick={() => handleSections(semester.id)}
                      >
                        Sections
                      </Button>
                    </Box>
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
