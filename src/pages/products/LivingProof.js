import React from "react";
import LivingProofLogo from "./logo-living-proof-logo-600x315.png";

export default function LivingProof() {
  return (
    <div className='h-screen w-screen border-dashed border-black border-2'>
      <img src={LivingProofLogo} alt='Living Proof Hair Products'></img>
    </div>
  );
}
