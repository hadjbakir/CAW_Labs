import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ onSubmit }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
    setUsername('');
    setPassword('');
};

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthForm;
