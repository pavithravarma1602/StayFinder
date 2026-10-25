import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login until backend authentication is connected
    const user = {
      name: "StayFinder User",
      email: formData.email,
      role: "student",
    };

    const token = "temporary-token";

    login({
      token,
      user,
    });

    navigate("/");
  };

  return (
    <div className="section">
      <div className="section-heading">
        <h2>Login</h2>
        <p>Login to your StayFinder account</p>
      </div>

      <div className="search-box">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="search-field">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <div className="search-field">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p style={{ marginTop: "20px" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#7c3aed" }}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;