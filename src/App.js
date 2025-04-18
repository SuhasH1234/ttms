// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSign from "./Components/LoginSign/LoginSign";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Timetable from "./Components/Timetable/Timetable";
import Navbar from "./Components/Navbar/Navbar";
import AddSemester from "./Components/Semester/AddSemester";
import ViewSemester from "./Components/Semester/ViewSemester";
import AddCourse from "./Components/Course/AddCourse";
import ViewCourses from "./Components/Course/ViewCourses";
import AddSection from "./Components/Section/AddSection";
import ViewSections from "./Components/Section/ViewSections";
import RegisterTeacher from "./Components/Teacher/RegisterTeacher";
import ViewTeachers from "./Components/Teacher/ViewTeachers";
import AddStudent from "./Components/Student/AddStudent";
import ViewStudents from "./Components/Student/ViewStudents";
import TransferSection from "./Components/Section/TransferSection";
import DeactivateSections from "./Components/Section/DeactivateSections";
import FacultyDashboard from "./Components/FacultyDashboard/FacultyDashboard";
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSign />} />
        <Route
          path="/admin-dashboard"
          element={
            <Navbar>
              <AdminDashboard />
            </Navbar>
          }
        />
        <Route
          path="/faculty-dashboard"
          element={
            <Navbar>
              <FacultyDashboard />
            </Navbar>
          }
        />
        <Route
          path="/student-dashboard"
          element={
            <Navbar>
              <StudentDashboard />
            </Navbar>
          }
        />
        <Route
          path="/view-timetable"
          element={
            <Navbar>
              <Timetable />
            </Navbar>
          }
        />
        <Route
          path="/add-semester"
          element={
            <Navbar>
              <AddSemester />
            </Navbar>
          }
        />
        <Route
          path="/view-semester"
          element={
            <Navbar>
              <ViewSemester />
            </Navbar>
          }
        />
        <Route
          path="/add-course"
          element={
            <Navbar>
              <AddCourse />
            </Navbar>
          }
        />
        <Route
          path="/view-courses"
          element={
            <Navbar>
              <ViewCourses />
            </Navbar>
          }
        />
        <Route
          path="/add-section"
          element={
            <Navbar>
              <AddSection />
            </Navbar>
          }
        />
        <Route
          path="/view-sections"
          element={
            <Navbar>
              <ViewSections />
            </Navbar>
          }
        />
        <Route
          path="/transfer-section"
          element={
            <Navbar>
              <TransferSection />
            </Navbar>
          }
        />
        <Route
          path="/deactivate-sections"
          element={
            <Navbar>
              <DeactivateSections />
            </Navbar>
          }
        />
        <Route
          path="/register-teacher"
          element={
            <Navbar>
              <RegisterTeacher />
            </Navbar>
          }
        />
        <Route
          path="/view-teachers"
          element={
            <Navbar>
              <ViewTeachers />
            </Navbar>
          }
        />
        <Route
          path="/add-student"
          element={
            <Navbar>
              <AddStudent />
            </Navbar>
          }
        />
        <Route
          path="/view-students"
          element={
            <Navbar>
              <ViewStudents />
            </Navbar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;