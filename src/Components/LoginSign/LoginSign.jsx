import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./LoginSign.css";

const LoginSign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", role); // Store the role in localStorage
    if (role === "faculty") {
      navigate("/faculty-dashboard");
    } else if (role === "student") {
      navigate("/student-dashboard");
    } else if (role === "admin") {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="/loginTTMS.png"
          alt="Timetable illustration"
          className="full-illustration"
        />
      </div>

      <div className="login-right">
        <div className="form-box">
          <h1 className="title">Timetable Management System</h1>
          <p className="subtitle">
            Effortless planning for academic excellence
          </p>

          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth style={{ marginBottom: "15px" }}>
              <InputLabel>User Role</InputLabel>
              <Select
                value={role}
                label="User Role"
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <MenuItem value="faculty">Faculty</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <input type="password" placeholder="Confirm Password" required />
            )}
            <button type="submit">{isLogin ? "Login" : "Register"}</button>
          </form>

          <p className="toggle-link" onClick={toggleMode}>
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSign;
