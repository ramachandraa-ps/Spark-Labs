'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            // In a real app, you'd fetch user data from a protected endpoint
            // For now, we can't easily decode the JWT on the client without a library
            // So we'll just show a generic welcome message.
            // A better approach would be to have a /users/me endpoint that returns user info.
            // Our backend has this, but for simplicity we are not calling it yet.
            setUsername('user');
        } else {
            window.location.href = '/auth';
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    };

    if (!username) {
        return <div>Loading...</div>; // Or a proper spinner
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to your Dashboard, {username}!</h1>
            <p className="mt-4">From here you can manage your agents and integrations.</p>

            <div className="mt-8">
                <Link href="/templates" className="text-xl text-blue-500 hover:underline">
                    Browse Agent Templates &rarr;
                </Link>
            </div>

            <button
                onClick={handleLogout}
                className="mt-10 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md"
            >
                Logout
            </button>
        </div>
    );
}
