'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [stores, setStores] = useState([]); 
    const getStores = async () => {
        const res = await fetch('https://weblab.localapp.cc/store', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        });
        const resData = await res.json();
        setStores(resData); 
        console.log(resData);
    }
    useEffect(() => {
        getStores();
    }, []); 

    return (
        <div>
            <header className="banner-header">
                <Link href="/" className="title">LAP PROGRAMMING</Link>
            </header>
            {stores.map(e => <div className="listmap">{e['name']} | {e['address']}</div>)}
        </div>
    );
}