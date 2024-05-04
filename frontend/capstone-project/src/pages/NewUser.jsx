import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";



export default function SignUp() {

    //state management for sign up requirements
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    //state management for show password toggle
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    //function to handle sign up
    const handleSignUp = async (e) => {
        e.preventDefault();

        //error handling for incorrect input
        if (!fullName) {
            setError("Please enter your full name")
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter valid email address")
            return;
        }
        if (!password) {
            setError("Please enter your password")
            return;
        }
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
                                type="text"
                                placeholder="Enter your password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="icon"><FaRegEye
                                size={15}
                                onClick={() => toggleShowPassword()}
                            />
                            </span>
                        </div>

                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}