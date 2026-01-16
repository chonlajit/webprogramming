'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function registerlab() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const register = async ()  => {
        const res = await fetch ('https://weblab.localapp.cc/user-profile/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: username,
                passWord: password
             })
        });
        const data = await res.json();
        if (data.data?.dataStatus === 1) {
            alert("Registration successful.");
            router.push('/landingpage');
        } else {
            alert("Registration failed. Please try again.");
    }
    }
    return (
    <div>
        <header className="banner-header">
                <div className="title" onClick={() => router.push('/')}>REGISTER PAGE</div>
        </header>
        <div className="main-container">
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={register}>Register</button>  
        </div>
    </div>
    );
}