import React from "react";
import FlowRX from "../../public/flowrx.png";

const HelloFlowrx = () => {
  return (
    <div>
      Hello Flow RX!{" "}
      <div style={{ border: "1px solid black", width: "150px" }}>
        <img src={FlowRX} alt="MBS" style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default HelloFlowrx;
