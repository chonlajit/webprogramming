'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [num , setnum] = useState(0);

    return (
        <div>  
            <header className="banner-header">
                <Link href="./" className="title">LAP PROGRAMMING</Link>
            </header>
            <h1>{num}</h1>
            <button onClick={() => setnum(num + 1)}>add</button> 
            <button onClick={() => setnum(num - 1)}>del</button> 
        </div>    
    );
}
