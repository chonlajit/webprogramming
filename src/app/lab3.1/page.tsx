'use client'

import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Home() { 
    const [stores, setStores] = useState<{name: string, address: string}[]>([]);
    useEffect(() => {
        fetchStores();
    }, []);
    const fetchStores = async () => {
        const res = await fetch('https://weblab.localapp.cc/store');
        const data = await res.json();
        setStores(data);
    }
    return (
        <div>
            <header className="banner-header">
                <Link href="/" className="title">LAP PROGRAMMING</Link>
            </header>
           {stores.map (e=> <div className="listmap">{e['name']} - {e['address']}</div>)}
        </div>
    );
}