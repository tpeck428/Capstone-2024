import { useState } from "react";
import { Link } from "react-router-dom";
// import PasswordInput from "../components/newUserComponents/PasswordInput";
import '../styles/LoginSignup.css'
// import { FaRegUser, FaLock } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


export default function LogIn({ onChange }) {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <>
            <div className="container">
                <div>
                    <form onSubmit={() => { }}>
                        <header> Login</header>

                        <div className="input-box">

                            <input
                                type="text"
                                placeholder="Username"
                                className="input"
                            />

                            <input
                                onChange={onChange}
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input"
                            />
                            <span className="icon"><FaRegEye
                                size={15}
                                onClick={() => toggleShowPassword()}
                            />
                            </span>

                        </div>

                        <button type="submit" className="btn">
                            Login
                        </button>

                        <p>
                            Not registered yet? {" "}
                            <Link to="/newuser">
                                Create an Account
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}

