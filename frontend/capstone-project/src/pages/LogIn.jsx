import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/newUserComponents/PasswordInput";
import '../styles/LoginSignup.css'

export default function LogIn() {

    return (
        <>
            <div className="container">
                <div>
                    <form onSubmit={() => { }}>
                        <header> Login</header>
                        <div className="inputs">
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="input-box"
                                />
                            </div>
                            <div className="input">
                                <PasswordInput />

                            </div>
                        </div>

                        <div className="btn-container">
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </div>

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