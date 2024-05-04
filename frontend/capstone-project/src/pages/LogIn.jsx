import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

export default function LogIn({ onLogin }) {
    //allows you to show or hide the password when typing it in
  const [isShowPassword, setIsShowPassword] = useState(false);
  //state mangement for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <form onSubmit={handleLogin}>
            <header> Login</header>

            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="icon" onClick={toggleShowPassword}>
                <FaRegEye size={15} />
              </span>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <p>
              Not registered yet?{" "}
              <Link to="/newuser">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
