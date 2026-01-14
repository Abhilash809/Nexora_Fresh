import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API
        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container animate-fade-in">
                <h1>Create Account</h1>
                <p className="auth-subtitle">Join the Nexora Fresh community</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" required placeholder="John" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" required placeholder="Doe" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" required placeholder="name@example.com" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required placeholder="Create a password" />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" required placeholder="Confirm password" />
                    </div>

                    <Button type="submit" variant="primary" className="btn-block" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
