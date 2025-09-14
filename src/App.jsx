import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// The main App component containing the UI for the login/signup page.
const App = () => {
  // State to manage the user's selected role
  const [role, setRole] = useState('student');

  // Placeholder function for handling the login action
  const handleLogin = () => {
    console.log(`Logging in as a ${role} with the provided credentials.`);
    // Here you would add the logic to handle form submission
  };

  return (
    // The main container for the entire app, setting the full-page layout and background gradient
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 font-sans">
      
      {/* Contact information in the top-right corner */}
      <div className="absolute top-4 right-5 text-sm text-white">
        📧 contact@mysite.com | ☎ +91 9876543210
      </div>

      {/* The main login box, centered on the screen */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-80 text-center">
        <h1 className="text-3xl font-bold mb-5 text-gray-800">Login</h1>

        {/* Role selection dropdown */}
        <div className="role-select mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 text-sm"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {/* Input fields for unique ID and password */}
        <input
          type="text"
          placeholder="Unique ID"
          required
          className="w-full p-2 mb-2 rounded-lg border border-gray-300 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 rounded-lg border border-gray-300 text-sm"
        />

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full p-3 mt-4 rounded-lg font-medium bg-blue-500 text-white text-lg cursor-pointer
                     transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>

        {/* Signup link */}
        <div className="mt-4 text-sm text-gray-600">
          Don’t have an account? <a href="#" className="text-blue-500 underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

// This is the self-contained HTML boilerplate to render the React app.
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login / Signup Page</title>
    <!-- Include the Tailwind CSS CDN for easy styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { margin: 0; }
      #root { width: 100%; height: 100vh; }
    </style>
</head>
<body>
    <div id="root"></div>
</body>
</html>
`;

// Create a new HTML document and render the React app into it.
const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
document.body.innerHTML = doc.documentElement.innerHTML;

// Find the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
