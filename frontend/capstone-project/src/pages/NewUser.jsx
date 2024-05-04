import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignUp({ onChange }) {
  // State management for sign up requirements
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // State management for show password toggle
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  // Function to handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Error handling for incorrect input
    if (!fullName) {
      setError("Please enter your full name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError('');
  };

  // Function to validate email address
  const validateEmail = (email) => {
    // Simple email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <div className="container">
        <div>
          <form onSubmit={handleSignUp}>
            <header>Sign Up</header>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your full name"
                className="input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter your username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon" onClick={toggleShowPassword}>
                <FaRegEye size={15} />
              </span>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>

          <p>
            Already have an account?{" "}
            <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
}
