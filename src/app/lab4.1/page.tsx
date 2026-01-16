'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function loginlab() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async ()  => {
        if (username === "" || password === "") {
            alert("Please fill in both username and password.");
            return;
        }
        const res = await fetch ('https://weblab.localapp.cc/user-profile/login', {
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
            router.push('/landingpage');
        } else {
            alert("Login failed. Please check your credentials.");
        }
    }

return (    
    <div>
        <header className="banner-header">
                <div className="title" onClick={() => router.push('/')}>LOGIN PAGE</div>
        </header>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>

    </div>
);
}