'use client'
import Link from "next/dist/client/link";
import { useState } from "react";

export default function Home() {
    const [str , setStr] = useState("type here");
    return (
        <div>
           <header className="banner-header">
            <Link href="./" className="title">LAP PROGRAMMING</Link>
        </header>
            <h1>{str}</h1>
            <input type ="text" onChange ={(text) => setStr (text.target.value)}></input>
        </div>
    );
}
