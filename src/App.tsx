import React, { Component } from "react";
import { Clock } from "./components/Clock";
import { TodosComponent } from "./components/Todo";

export function App() {
  return (
    <div className="w-full flex flex-wrap min-h-screen">
      <div className="w-7/12 relative">
        {/* set font size, width etc. */}
        <div className="table absolute top-0 right-0 h-full w-full">
          <Clock />
        </div>
      </div>

      <div className="w-5/12 relative">
        <div className="table absolute top-0 right-0 h-full w-full">
          <TodosComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
