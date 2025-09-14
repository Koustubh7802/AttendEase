import React, { useState } from "react";
import "./App.css"; // We’ll move the styles to App.css for clarity

function App() {
  const [role, setRole] = useState("student");
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in as ${role} with ID: ${uniqueId}`);
  };

  return (
    <div className="app">
      {/* Contact info */}
      <div className="contact-info">
        📧 contact@mysite.com | ☎ +91 9876543210
      </div>

      {/* Login box */}
      <div className="login-box">
        <h1>Login</h1>

        {/* Role selector */}
        <div className="role-select">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {/* Input fields */}
        <input
          type="text"
          placeholder="Unique ID"
          value={uniqueId}
          onChange={(e) => setUniqueId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Buttons */}
        <button onClick={handleLogin}>Login</button>

        <div className="signup-link">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default App;

