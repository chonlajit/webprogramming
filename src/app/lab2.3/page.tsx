'use client'
import Link from "next/dist/client/link";
import { useState } from "react";

export default function sumlist() {
     const [lset, setSet] = useState<number[]>([])
     const [num, setNum] = useState("")
     const [sum, setSum] = useState(0)
     function onAdd() {
                setSet(prev => [...prev, parseInt(num)]);
                setSum(prevSum => prevSum + parseInt(num));
    }
    return (
        <div>
            <header className="banner-header">
                <Link href="./" className="title">LAP PROGRAMMING</Link>
            </header>
            {lset.map(item => <div className="listmap"> {item} </div>)}
            <input type="text" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={onAdd}>add</button>
            <div>sum: {sum}</div>
        </div>
       
    );
}
