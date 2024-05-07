import React from "react";
import "./Hero.css";

function Hero({
  title = "Become a React Dev",
  subtitle = "Find the React job that fits your skill set",
}) {
  return (
    <section>
      <div>
        <div className="text-center">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
