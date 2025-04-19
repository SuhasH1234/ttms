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
import "./ViewSections.css";

const ViewSections = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "B Tech 1st Year - SEM 1",
      description: "B Tech 1st Year - SEM 1",
      semester: 1,
    },
    {
      id: 2,
      name: "B Tech 1st Year - SEM 2",
      description: "B Tech 1st Year - SEM 2",
      semester: 2,
    },
    {
      id: 3,
      name: "B Tech 2nd Year - SEM 1",
      description: "B Tech 2nd Year - SEM 1",
      semester: 1,
    },
  ]);

  const handleUpdate = (id) => {
    alert(`Update section with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const handleTimetable = (timetable) => {
    alert(`Upload timetable for: ${timetable}`);
  };

  return (
    <Container maxWidth="lg" className="section-container">
      <Paper className="section-paper" elevation={6}>
        <Typography variant="h4" className="section-title">
          All Sections
        </Typography>
        <Box sx={{ overflowX: "auto" }}>
          <Table className="section-table">
            <TableHead>
              <TableRow className="section-header">
                <TableCell>
                  <strong>Section Id</strong>
                </TableCell>
                <TableCell>
                  <strong>Section Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
                <TableCell>
                  <strong>Semester</strong>
                </TableCell>
                <TableCell>
                  <strong>Timetable</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sections.map((section, index) => (
                <TableRow
                  key={section.id}
                  className={index % 2 === 0 ? "section-row" : "section-row-alt"}
                >
                  <TableCell>{section.id}</TableCell>
                  <TableCell>{section.name}</TableCell>
                  <TableCell>{section.description}</TableCell>
                  <TableCell>{section.semester}</TableCell>
                  <TableCell>{section.timetable}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn update"
                      onClick={() => handleTimetable(section.timetable)}
                    >
                      Upload Time Table
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn update"
                      onClick={() => handleUpdate(section.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="action-btn delete"
                      onClick={() => handleDelete(section.id)}
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

export default ViewSections;