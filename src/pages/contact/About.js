import React from "react";
import GlossGeniusLogo from "./Gloss_Genius_Logo_Link.png";

export default function About() {
  return (
    <div className='flex flex-col h-screen w-screen text-white'>
      <div className='flex flex-row w-screen h-1/5'>
        <div className=''>
          <p className=''>Find Me Here</p>
        </div>
        <div className=''>
          <img
            className='w-max'
            src={GlossGeniusLogo}
            alt='Gloss Genius Link'
          />
        </div>
      </div>

      <ul>
        <li>Gloss Genius Booking Link</li>
        <li>Picture of Janksta!</li>
        <li>Bio</li>
        <li>Small Social Links</li>
      </ul>
    </div>
  );
}
