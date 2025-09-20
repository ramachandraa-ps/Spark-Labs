'use client';

import { useState } from 'react';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        const endpoint = isLogin ? '/token' : '/register';
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const apiUrl = `${baseUrl}${endpoint}`;

        try {
            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Something went wrong');
            }

            if (isLogin) {
                localStorage.setItem('accessToken', data.access_token);
                setMessage('Login successful! Redirecting...');
                // In a real app, you'd redirect to a dashboard page
                window.location.href = '/dashboard';
            } else {
                setMessage('Registration successful! Please log in.');
                setIsLogin(true);
            }
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-black"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-black"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <div className="mt-4 text-center">
                <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
                    {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
                </button>
            </div>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
}
