'use client'
import { useRouter } from "next/navigation";

export default function landingpage() {
    const router = useRouter();
    return (
        <div>
            <header className="banner-header">
                <div className="title" onClick={() => router.push('/')}>LANDING PAGE</div>
             </header>
        </div>
    );
}
