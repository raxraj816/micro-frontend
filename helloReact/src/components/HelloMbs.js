import React from "react";
import MBS from "../../public/mbs.jpg";

const HelloMbs = () => {
  return (
    <div>
      Hello MBS!
      <div style={{ border: "1px solid black", width: "150px" }}>
        <img src={MBS} alt="MBS" style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default HelloMbs;
