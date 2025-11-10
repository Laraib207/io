"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Allowed/सही कोड्स (इन्हें आप अपनी ज़रूरत से बदल सकते हैं)
  const validCodes = ["VEER123", "DUMMY456"];

  function handleSubmit(e) {
    e.preventDefault();
    if (validCodes.includes(code.trim().toUpperCase())) {
      sessionStorage.setItem("veerVerification", "true");
      router.push('/'); // सही कोड मिलने पर होम पेज खोलें
    } else {
      setError("Invalid code entered, please enter the correct code.");
    }
  }

  return (
    <div style={{margin:"50px auto", maxWidth:400, textAlign:"center"}}>
      <h2>Product Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ padding:10, width:"80%", marginBottom:"1rem" }}
        />
        <br/>
        <button type="submit" style={{ padding:"10px 40px" }}>Verify</button>
      </form>
      {error && <div style={{ color:"red", marginTop:"1rem" }}>{error}</div>}
    </div>
  );
}
