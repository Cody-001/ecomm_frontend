import React, { useState } from 'react';

const LoginAdmin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
  
    const API_URL = import.meta.env.VITE_API_URL;
  
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const adminLogin = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/adminlogin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
  
        if (data.success) {
          localStorage.setItem("admin-token", data.token);
          // Use relative path for redirect to work in any environment
          window.location.href = `${API_URL}/admin`;
        } else {
          alert(data.error || "Login failed");
        }
      } catch (error) {
        alert("Network error. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="adminlogin loginSignup">
        <div className="loginSignup-container">
          <h1>Admin Login</h1>
          <div className="loginSignup-fields">
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
          <button onClick={adminLogin} disabled={loading}>
            {loading ? "Please wait..." : "Continue"}
          </button>
          <div className="loginsign-agree">
            <input type="checkbox" disabled={loading} />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    );
}

export default LoginAdmin