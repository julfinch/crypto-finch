import React from "react";
import "./DataStyles.css";
import dataBg from "../../assets/data-bg.png";

const Data = () => {
  return (
    <div
      className="data"
      style={{
        backgroundImage: `url("${dataBg}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="container">
        <div className="content">
          <h2>
            <span>Data</span> Recovery
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            culpa quasi illo consectetur recusandae consequuntur asperiores eius
            dignissimos accusantium molestiae? Expedita quos id aut quia
            dolores, saepe distinctio adipisci nulla!
          </p>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
