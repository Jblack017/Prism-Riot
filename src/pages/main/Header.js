import React from "react";

export default function Header() {
  return (
    <div className='sticky flex flex-col h-14 w-screen top-0 z-50 bg-black text-white'>
      <div className='self-end my-auto mr-6'>
        <a
          className='self-end px-2 my-auto font-CinzelDecorative border-2 border-white rounded-2xl'
          href='https://prismriothairstudio.glossgenius.com/services'
        >
          BOOK NOW
        </a>
      </div>
    </div>
  );
}
