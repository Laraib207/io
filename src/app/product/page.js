"use client";

import { useSearchParams } from "next/navigation";

export default function Product() {
  const params = useSearchParams();
  const code = params.get("code");

  // Product details को यहाँ मैने hardcode किया है
  const productData = {
    VEER123: {
      name: "Veer Bharat Oil",
      manufacturer: "AM - Bhawani Silicate Industries",
      location: "Jaipur, Rajasthan",
      fssai: "10020013002405"
    },
    DUMMY456: {
      name: "Demo Product",
      manufacturer: "Demo Company",
      location: "Delhi",
      fssai: "10020000011111"
    }
  };

  const details = productData[code?.toUpperCase()];

  return (
    <div style={{margin:"50px auto", maxWidth:600}}>
      <h2>Product Details</h2>
      {details ? (
        <div>
          <strong>Name:</strong> {details.name}<br/>
          <strong>Manufacturer:</strong> {details.manufacturer}<br/>
          <strong>Location:</strong> {details.location}<br/>
          <strong>FSSAI Lic. No.:</strong> {details.fssai}
        </div>
      ) : (
        <div>Invalid code or details not found!</div>
      )}
    </div>
  );
}
