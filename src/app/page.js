// import VeerBharatManufacturing from "../components/VeerBharatManufacturing";
// import Contact from "../components/Contact";

// export default function Home() {
//   return (
//     <>
//       <VeerBharatManufacturing />
//       <Contact />
//     </>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import VeerBharatManufacturing from "../components/VeerBharatManufacturing";
import Contact from "../components/Contact";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check verification status in local/session storage
    if (typeof window !== "undefined") {
      const verified = sessionStorage.getItem("veerVerification");
      if (verified === "true") {
        setIsVerified(true);
      } else {
        router.replace("/verify");
      }
    }
  }, []);

  if (!isVerified) {
    // Do not render main content until verified
    return null;
  }

  // After successful verification
  return (
    <>
      <VeerBharatManufacturing />
      <Contact />
    </>
  );
}

