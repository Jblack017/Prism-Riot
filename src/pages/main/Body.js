import React from "react";
import About from "../contact/About";
import GlossImages from "../gg_images/GlossImages";
import Home from "../home/Home";
import Location from "../location/Location";
import ElevenAustralia from "../products/ElevenAustralia";
import LivingProof from "../products/LivingProof";
import Services from "../services/Services";

export default function Body() {
  return (
    <div className='top-0 bg-black'>
      <Home />
      <GlossImages />
      <About />
      <Location />
      <ElevenAustralia />
      <LivingProof />
      <Services />
    </div>
  );
}
