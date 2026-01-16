import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginSignup">
        <div className="loginSignup-container">
          <h1>{state}</h1>
          <div className="loginSignup-fields">
            {state === "Sign Up" && (
              <input
                name="name"
                value={formData.name}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
                disabled={loading}
              />
            )}
            <input
              value={formData.email}
              onChange={changeHandler}
              name="email"
              type="email"
              placeholder="Email Address"
              disabled={loading}
            />
            <input
              value={formData.password}
              onChange={changeHandler}
              name="password"
              type="password"
              placeholder="Password"
              disabled={loading}
            />
          </div>
          <button onClick={() => { state === "Login" ? login() : signup() }} disabled={loading}>
            {loading ? "Please wait..." : "Continue"}
          </button>
          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account? <span onClick={() => setState("Login")}>Login</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account <span onClick={() => setState("Sign Up")}>Click here</span>
            </p>
          )}
          <div className="loginsign-agree">
            <input type="checkbox" disabled={loading} />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
