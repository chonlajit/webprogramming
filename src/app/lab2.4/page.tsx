'use client'

import Link from "next/dist/client/link";
import { useState } from "react";

export interface Data{ 
    name: string, 
    price: string 
} 
export default function Home() {
     const [lset, setSet] = useState<Data[]>([]) 
     const [value1, setValue1] = useState("")
     const [value2, setValue2] = useState("")
     function onAdd() {
        setSet(prev => [...prev, {name: value1, price: value2}])
     }
     return(
      <div>
        <header className="banner-header">
            <Link href="./" className="title">LAP PROGRAMMING</Link>
        </header>
        {lset.map(item => <div className="listmap"> {item.name} - {item.price} </div>)}
        <input type="text" value={value1} onChange={e => setValue1(e.target.value)}/>
        <input type="text" value={value2} onChange={e => setValue2(e.target.value)}/>
        <button onClick={onAdd}>add</button>
    </div>
    );          
}