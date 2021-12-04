import React from "react";

export default function Menu() {
  return (
    <div className='h-screen w-screen border-dashed border-black border-2'>
      <h1>Services</h1>
      <div>
        <h2>Treatments</h2>
        <ul>
          <li>Deep Conditioning</li>
          <li>Keratin Complex</li>
          <li>B3 Demi Conditioning treatment</li>
        </ul>
      </div>
      <div>
        <h2>Hair Color</h2>
        <ul>
          <li>All over natural tones</li>
          <li>Balayage </li>
          <li>Color correction</li>
          <li>Vivid hair color</li>
          <li>Lighten, Tone, and Touch ups</li>
          <li>Full/Partial highlight</li>
          <li>Ombré</li>
          <li>Mens Grey Blending</li>
        </ul>
      </div>
      <div>
        <h2>Styles</h2>
        <ul>
          <li>Blow Out</li>
          <li>Special Occasion Updo</li>
          <li>Brides & Bridesmaids</li>
          <li>Off Site Available</li>
        </ul>
      </div>
      <div>
        <h2>Facial Waxing</h2>
        <ul>
          <li>Chin, Brow, and Lip</li>
        </ul>
      </div>
    </div>
  );
}
