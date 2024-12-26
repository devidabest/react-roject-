import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";
import MainContent from "./components/mainContent";
import React from "react";
export default function App() {
  return (
      <div className="min-h-screen w-screen bg-black px-20 flex   "> 
      <div className=" w-1/5 "> <LeftSide/> </div>
      <div className=" w-3/5 "> <MainContent/> </div>
      <div className=" w-1/5 "> <RightSide/> </div>
      
      
      </div>

  );
}
