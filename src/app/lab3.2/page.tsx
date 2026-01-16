'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState } from "react";

export default function postlab() {
    const router = useRouter();
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
              <div className="title" onClick={() => router.push('/')}>LAP PROGRAMMING</div>  
            </header>
            <h2>Add New Store</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Store Name" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <button onClick={savestore}>Save Store</button>
        </div>
    );
}