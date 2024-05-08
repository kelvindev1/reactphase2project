import React from "react";
import Hero from "./Hero";
import Homecard from "./Homecard";
import Joblistings from "./Joblistings";

function Homelayout() {
  return (
    <div>
      <Hero />
      <Homecard />
      <Joblistings />
    </div>
  );
}

export default Homelayout;
