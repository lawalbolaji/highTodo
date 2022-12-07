import React from "react";
import { CreateNewTodo } from "./CreateNewTodo";
import { UpdateTodo } from "./UpdateTodo";
import { TodoType, useTodoItems } from "./hooks/useTodoItems";

type TodosPropsType = {};

export const TodosComponent = ({}: TodosPropsType) => {
  const { todoItems, updateTodoItem, addNewTodoItem } = useTodoItems();

  return (
    <div className="table-cell align-middle pr-8">
      <div className="border-2 rounded-md border-gray-200 dark:border-gray-600">
        <div className="p-4">
          <p className="px-2 py-3 text-xl font-bold">🪴 Essential Todo's</p>
          <ul>
            {todoItems
              .filter((todoItem) => !todoItem.isChecked)
              .map((todo: TodoType) => (
                <li key={todo.id} className="w-full rounded-t-lg">
                  <div className="flex items-center pl-3">
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodoItem<TodoType, "isChecked">(todo.id, "isChecked", e.currentTarget.checked)}
                      checked={todo.isChecked}
                      type="checkbox"
                      className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodoItem<TodoType, "description">(todo.id, "description", e.currentTarget.value)} type="text" className="mx-2 border-0 focus:ring-0 w-full" value={todo.description} />
                  </div>
                </li>
              ))}
          </ul>

          {/* new todo */}
          <CreateNewTodo addNewTodoItem={addNewTodoItem} />

          <hr />
          {/* completed todo items */}
          <UpdateTodo todoItems={todoItems} updateTodoItem={updateTodoItem} />
        </div>
      </div>
    </div>
  );
};
