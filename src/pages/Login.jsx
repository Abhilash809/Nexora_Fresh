import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container animate-fade-in">
                <h1>Welcome Back</h1>
                <p className="auth-subtitle">Login to access your orders and profile</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" required placeholder="name@example.com" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required placeholder="••••••••" />
                    </div>

                    <div className="form-footer">
                        <Link to="#" className="forgot-password">Forgot password?</Link>
                    </div>

                    <Button type="submit" variant="primary" className="btn-block" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                </form>

                <p className="auth-switch">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
