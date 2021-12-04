import React from "react";
import HairColor from "./Menus/HairColor";
import Styles from "./Menus/Styles";
import Treatments from "./Menus/Treatments";
import Waxing from "./Menus/Waxing";

export default function Services() {
  return (
    <div className='h-screen w-screen border-dashed border-black border-2'>
      <h1>Services</h1>
      <Treatments />
      <HairColor />
      <Styles />
      <Waxing />
    </div>
  );
}
