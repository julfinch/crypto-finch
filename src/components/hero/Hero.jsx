import React from "react";
import "./HeroStyles.css";
import cyberBg from "../../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("${cyberBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="container">
        <div className="content">
          <h1>
            Data <span className="blue">Secured</span>
          </h1>

          <h1>Protection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            culpa quasi illo consectetur recusandae consequuntur asperiores eius
            dignissimos accusantium molestiae?
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
