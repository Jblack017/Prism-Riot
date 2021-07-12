import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Landing() {
  return (
    <div className='grid grid-rows-6 grid-cols-1 h-screen w-screen'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
