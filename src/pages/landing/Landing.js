import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Body() {
  return (
    <div className='grid grid-rows-6 grid-cols-1 h-screen w-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
