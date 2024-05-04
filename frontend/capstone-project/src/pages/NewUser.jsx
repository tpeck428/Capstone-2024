import { useState } from "react";


export default function SignUp() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    //function to handle log in
    const handleSignUp = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="signup-container">
                <div>
                    <form onSubmit={handleSignUp}>
                        <header>Sign Up</header>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="input-box"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="input-box"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Enter your password"
                            className="input-box"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        
                    </form>
                </div>
            </div>
        </>
    )
}