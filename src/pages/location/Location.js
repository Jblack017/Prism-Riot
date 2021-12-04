import React from "react";
import GoogleIframe from "./GoogleIframe";

export default function Location() {
  return (
    <div className='h-screen w-screen border-dashed border-black border-2'>
      <div className='h-1/2 w-auto mx-auto'>
        <p>Some Directional Stuff Here</p>
      </div>
      <GoogleIframe />
    </div>
  );
}
