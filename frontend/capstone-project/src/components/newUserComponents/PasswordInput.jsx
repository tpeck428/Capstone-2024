import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {

const [isShowPassword, setIsShowPassword] = useState(false);
const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
};

  return (
    <div className='password-input'>
        <input 
        className='input-box'
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        />

        <FaRegEye 
        size={15}
        onClick={() => toggleShowPassword()}
        
        />
    </div>
  )
}

export default PasswordInput;