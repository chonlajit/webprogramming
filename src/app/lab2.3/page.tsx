'use client'
import Link from "next/dist/client/link";
import { useState } from "react";

export default function Home() {
    const [lst, setLst] = useState<number[]>([]);
    const [str, setStr] = useState("");
    const [sum, setSum] = useState(0);
    function onAdd() {
        setLst(prev => [...prev , parseInt(str) ]);
        setSum(prev => prev + parseInt(str));
    }
    return (
        <div>
            <header className="banner-header">
                <Link href="./" className="title">LAP PROGRAMMING</Link>
            </header>
            {lst.map(item => <div className="listmap"> {item} </div>)}
            <input type="text" value={str} onChange={e => setStr(e.target.value)} />
            <button onClick={onAdd}>add</button>
            <h1>SUMATION : {sum} </h1>
        </div>
    );
}
