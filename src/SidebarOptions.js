import React from "react";
import "./sidebarOptions.css";
function SidebarOptions({ option, Icon }) {
  return (
    <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOptions;
