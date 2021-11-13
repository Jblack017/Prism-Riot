import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className='flex text-celadon font-tourney '>
      <div className='absolute place-self-end h-24 w-24'>
        <div className='hexagon'></div>
      </div>
      <Nav />
    </div>
  );
}
