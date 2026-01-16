'use client'

import PrefixNameDDl from "../components/prefix-name"

export default function Register() {
    return (
        <>  
        <div>
            <div>คณะ</div>
            <PrefixNameDDl type={1}/>
        </div>

        <div>
            <div>ชื่อ</div>
            <PrefixNameDDl type={2}/>
        </div>  
        </>
    )
}