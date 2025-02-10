import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();
    //const navigate = useNavigate();
    const [user, setUser] = useState({ username: '', email: '' });
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

   

    useEffect(() => {
        fetchUserData();
    }, [username]);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/profile/${username}`);
            if (!response.ok) throw new Error('Failed to fetch user data');
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const getUserData = async () => {
        fetchUserData();
    };




    const handleUpdateUsername = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/profile/update-username`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ oldUsername: user.username, newUsername })
            });
            if (!response.ok) throw new Error('Failed to update username');
            const data = await response.json();
            setUser(data.user);
            setMessage('Username updated successfully');
        } catch (error) {
            console.error('Error updating username:', error);
        }
    };

    const handleUpdateEmail = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/profile/update-email`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: user.username, newEmail })
            });
            if (!response.ok) throw new Error('Failed to update email');
            const data = await response.json();
            setUser(data.user);
            setMessage('Email updated successfully');
        } catch (error) {
            console.error('Error updating email:', error);
        }
    };

    const handleForgotPassword = async () => {
        try {
            await fetch(`http://localhost:8080/api/profile/forgot-password`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email })
            });
            setMessage('OTP sent to your email');
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            await fetch(`http://localhost:8080/api/profile/reset-password`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email, otp, newPassword })
            });
            setMessage('Password reset successfully');
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>User Details</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>

            <div>
                <h2>Update Username</h2>
                <input type="text" placeholder="New Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                <button onClick={handleUpdateUsername}>Update Username</button>
            </div>

            <div>
                <h2>Update Email</h2>
                <input type="email" placeholder="New Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                <button onClick={handleUpdateEmail}>Update Email</button>
            </div>

            <div>
                <h2>Forgot Password</h2>
                <button onClick={handleForgotPassword}>Send OTP</button>
            </div>

            <div>
                <h2>Reset Password</h2>
                <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button onClick={handleResetPassword}>Reset Password</button>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Profile;