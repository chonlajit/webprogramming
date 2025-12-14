'use client'

import Link from "next/link";
import {useState } from "react";

export default function Home() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const saveStores = async () => {
        try{
        const res = await fetch('https://weblab.localapp.cc/store', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name: name, address: address }),
        });
        } catch (error) {
            document.getElementById("result")!.innerText = "save failed";
        }
        document.getElementById("result")!.innerText = "Saved Successfully";
        
    }
    return (
        <div>
            <header className="banner-header">
                <Link href="/" className="title">LAP PROGRAMMING</Link>
            </header>
            <span>Name:</span>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <span>Address:</span>
            <input type="text" onChange={(e) => setAddress(e.target.value)} />
            <button onClick={saveStores}>save</button>
            <div id="result"></div>
        </div>
    );
}