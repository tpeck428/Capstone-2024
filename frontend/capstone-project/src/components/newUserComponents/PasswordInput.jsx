// import React, { useState } from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { FaLock } from "react-icons/fa";
// import '../../styles/LoginSignup.css'


// const PasswordInput = ({ value, onChange, placeholder }) => {

// const [isShowPassword, setIsShowPassword] = useState(false);
// const toggleShowPassword = () => {
//     setIsShowPassword(!isShowPassword);
// };

//   return (
//     <div className='input-box'>
//         <FaLock className='icon' />
//         <input 
//         value={value}
//         onChange={onChange}
//         type={isShowPassword ? "text" : "password"}
//         placeholder={placeholder || "Password"}
//         />

//         <FaRegEye 
//         className='icon'
//         size={15}
//         onClick={() => toggleShowPassword()}
        
//         />
//     </div>
//   )
// }

// export default PasswordInput;