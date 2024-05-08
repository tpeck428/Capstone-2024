import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

export default function LogIn({ onLogin }) {
    //allows you to show or hide the password when typing it in
  const [isShowPassword, setIsShowPassword] = useState(false);
  //state mangement for username and password
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    //used props incorrectly- nonworking
    // if (username.trim() !== '' && password.trim() !== '') {
    //   onLogin(username);
    // } else {
    //   alert('Please enter both username and password.');
    // }

    // axios.get('/')
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
                value={data.username}
                onChange={(e) => setData({...data, username: e.target.value})}
              />

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                className="input"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
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
