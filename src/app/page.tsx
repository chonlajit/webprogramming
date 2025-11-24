'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "") {
      router.push(e.target.value);
    }
  };

  return (
    <div>
      <header className="banner-header">
        <div className="title">LAP PROGRAMMING</div> 
      </header>
      <span style={{fontSize: "30px",fontFamily: "serif",fontWeight: "bold"}}>Choose Lab:</span>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>-- Select Lab --</option>
        <option value="/lab2.1">Lab 2.1</option>
        <option value="/lab2.2">Lab 2.2</option>
        <option value="/lab2.3">Lab 2.3</option>
        <option value="/lab2.4">Lab 2.4</option>
      </select>
    </div>
  );
}
