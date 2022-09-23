import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const SideMenu = () => {
  const history = useHistory();

  const onClick = (e) => {
    if (e.key === "flowrx") {
      history.push("/");
    } else {
      history.push("/mbs");
    }
  };
  const items = [
    { label: "FlowRX", key: "flowrx" },
    { label: "MBS", key: "mbs" },
  ];
  return (
    <div>
      <Menu
        onClick={onClick}
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["flowrx"]}
        items={items}
      />
      ;
    </div>
  );
};

export default SideMenu;
