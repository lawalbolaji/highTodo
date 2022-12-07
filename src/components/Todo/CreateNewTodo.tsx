import React from "react";
import { TodoCreateType } from "./hooks/useTodoItems";

type CreateTodoPropType = {
  addNewTodoItem: (newTodo: TodoCreateType) => void;
};

export const CreateNewTodo = ({ addNewTodoItem }: CreateTodoPropType) => {
  const [newTodo, setNewTodo] = React.useState<string>("");
  const handleNewTodoChange = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCreateNewTodo();
  };

  const handleCreateNewTodo = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addNewTodoItem({ description: newTodo });
    setNewTodo("");
  };

  return (
    <div className="w-full flex my-4">
      <button className="px-3 hover:ring-blue-500 hover:ring-1 hover:bg-gray-100 hover:rounded" onClick={handleCreateNewTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <div className="w-full">
        <input value={newTodo} onKeyDown={handleNewTodoChange} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.currentTarget.value)} type="text" placeholder="add todo here" className="border-0 focus:ring-0 w-full" />
      </div>
    </div>
  );
};
