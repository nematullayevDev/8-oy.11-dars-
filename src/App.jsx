import React from "react";
import LeftSitebar from "./components/LeftSitebar";
import RightSitebar from "./components/RightSitebar";

function App() {
  return (
    <div className="">
      <div className="flex">
        <LeftSitebar></LeftSitebar>

        <RightSitebar></RightSitebar>
      </div>
    </div>
  );
}

export default App;
