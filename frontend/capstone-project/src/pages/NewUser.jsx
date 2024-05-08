import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SignUp() {

const navigate = useNavigate()

  // State management for sign up requirements
  const [data, setData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  })
  // const [error, setError] = useState(null);

  // State management for show password toggle
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  // Function to handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(e);

    // Error handling for incorrect input and axios post request
  //   const {fullName, username, email, password} = data
  //   try {
  //     const {data} = await axios.post('/newuser', {
  //       fullName, username, email, password
  //     })

  //     if(data.error) {
  //       toast.error(data.error)
  //     } else {
  //       setData({})
  //       toast.success('Registration Successful. Welcome!')
  //       navigate('/login')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
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
                value={data.fullName}
                onChange={(e) => setData({...data, fullName: e.target.value})}
              />

              <input
                type="text"
                placeholder="Enter your username"
                className="input"
                value={data.username}
                onChange={(e) => setData({...data, username: e.target.value})}
              />

              <input
                type="text"
                placeholder="Enter your email"
                className="input"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
              />

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
              />
              <span className="icon" onClick={toggleShowPassword}>
                <FaRegEye size={15} />
              </span>
            </div>
{/* 
            {error && <p className="error">{error}</p>} */}

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
