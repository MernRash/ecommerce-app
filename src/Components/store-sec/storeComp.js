import React from "react";
import "./storeComp.scss";
import LeftSideBar from "./storeLeftComp";
import RightSideBar from "./storeRightComp";


function StoreComp() {
  
  return (
    <div className="store-container">
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default StoreComp;
