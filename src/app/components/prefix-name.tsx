'use client'

import {useEffect,useState } from "react";

export interface PrefixData {  
    type: number
}

export default function PrefixNameDDl({type }: PrefixData) {
    const [data ,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://weblab.localapp.cc/set-up?type=' + type)
            const resData = await res.json();
            setData(resData.data);
        };
        fetchData();
    }, [])

return (
    <>
    <select>
        {data.map(e=> (<option key={e['id']}>{e['value']}</option>))}
    </select>
    </>
)
}