import React, { Component } from "react";
import { Clock } from "./components/Clock";
import { useTimer } from "./components/Timer";
import { TodosComponent } from "./components/Todo/Todos";

const mockTodos = [
  {
    id: 1,
    description: "eat cake",
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    description: "eat cake",
    createdAt: new Date("2022").toDateString(),
  },
  {
    id: 3,
    description: "eat cake",
    createdAt: new Date("2021").toDateString(),
  },
  {
    id: 4,
    description: "eat cake",
    createdAt: new Date("2020").toDateString(),
  },
  {
    id: 5,
    description: "eat cake",
    createdAt: new Date("2019").toDateString(),
  },
];

export function App() {
  return (
    <div className="w-full flex flex-wra min-h-screen">
      <div className="w-7/12 relative">
        {/* set font size, width etc. */}
        <div className="table absolute top-0 right-0 h-full w-full">
          <Clock date={useTimer()} />
        </div>
      </div>

      <div className="w-5/12 relative">
        <div className="table absolute top-0 right-0 h-full w-full">
          <TodosComponent todos={mockTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
