import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css'; // Make sure this path is correct

const Admin = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (id === "kvd" && password === "password") {
            navigate("/2025919419362813");
        } else {
            alert("Invalid ID or Password");
        }
    };

    return (
        <div className="admin-login-container">
            <form onSubmit={handleLogin} className="admin-login-form">
                <h2>Admin Login</h2>
                <label>
                    ID:
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Admin;
