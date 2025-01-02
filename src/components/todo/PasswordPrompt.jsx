import React, { useState } from 'react';
import './HeaderComponent.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';


function PasswordPrompt({ onConfirm, onCancel }) {
    const [password, setPassword] = useState('');

    const authContext = useAuth();

    const navigate = useNavigate();

    const handleConfirm = () => {
        authContext.deleteAccount(password);
    };

    function onCancel() {
        navigate('/todos');
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Confirm Account Deletion</h2>
                <p>Please enter your password to confirm account deletion:</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="modal-actions">
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordPrompt;