import React from "react";
import Hero from "./Hero";
import Homecard from "./Homecard";
import Joblistings from "./Joblistings";
import Navbar from "./Navbar";

function Homelayout() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Homecard />
      <Joblistings />
    </div>
  );
}

export default Homelayout;
