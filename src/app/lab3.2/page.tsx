'use client'

import Link from "next/link";
import {useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const savestore = async () => {
        const res = await fetch('https://weblab.localapp.cc/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, address })
        });
    };
    return (
        <div>
            <header className="banner-header">
                <Link href="/" className="title">LAP PROGRAMMING</Link>
            </header>
            <h2>Add New Store</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Store Name" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <button onClick={savestore}>Save Store</button>
        </div>
    );
}