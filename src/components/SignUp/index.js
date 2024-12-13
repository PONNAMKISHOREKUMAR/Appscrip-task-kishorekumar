import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./index.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data Submitted:", formData);
        alert("Signup successful!");
        setFormData({ name: "", email: "", password: "" });
    };

    return (
        <Link to="/profile">
        <div className="signup-container">
            <h2>Create Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />

                <button type="submit" className="signup-btn">
                    Sign Up
                </button>
            </form>
        </div>
        </Link>
    );
};

export default SignUp;
