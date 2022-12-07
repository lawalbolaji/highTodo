import React from "react";

type TodosPropsType = {};

type TodoType = {
  id: number;
  description: string;
  createdAt: string;
  isChecked: boolean;
};

type TodoCreateType = Omit<TodoType, "id" | "isChecked" | "createdAt">;

const useTodoItems = () => {
  const mockTodos = [
    {
      id: 1,
      description: "eat cake",
      createdAt: new Date().toDateString(),
      isChecked: false,
    },
    {
      id: 2,
      description: "eat cake",
      createdAt: new Date("2022").toDateString(),
      isChecked: false,
    },
    {
      id: 3,
      description: "eat cake",
      createdAt: new Date("2021").toDateString(),
      isChecked: false,
    },
    {
      id: 4,
      description: "eat cake",
      createdAt: new Date("2020").toDateString(),
      isChecked: false,
    },
    {
      id: 5,
      description: "eat cake",
      createdAt: new Date("2019").toDateString(),
      isChecked: false,
    },
  ];

  const [todoItems, setTodoItems] = React.useState<TodoType[]>(mockTodos);
  const updateTodoItem = <T, K extends keyof T>(todoId: number, field: K, value: T[K]) => {
    setTodoItems((todoItems) => {
      return [...todoItems.filter((todo) => todo.id !== todoId), { ...todoItems.find((todoItem) => todoItem.id === todoId)!, id: todoId, [field]: value }].sort((a, b) => a.id - b.id);
    });
  };

  const addNewTodoItem = (newTodo: TodoCreateType) => {
    setTodoItems((todoItems) => {
      return [...todoItems, { ...newTodo, id: todoItems[todoItems.length - 1].id + 1, createdAt: new Date().toDateString(), isChecked: false }];
    });
  };

  return { todoItems, updateTodoItem, addNewTodoItem };
};

export const TodosComponent = ({}: TodosPropsType) => {
  const { todoItems, updateTodoItem, addNewTodoItem } = useTodoItems();
  const [newTodo, setNewTodo] = React.useState<string>("");

  const handleCreateNewTodo = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addNewTodoItem({ description: newTodo });
    setNewTodo("");
  };

  const handleNewTodoChange = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCreateNewTodo();
  };

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

          {/* new todo Item */}
          <div className="w-full flex my-4">
            <button className="px-3 hover:ring-blue-500 hover:ring-1 hover:bg-gray-100 hover:rounded" onClick={handleCreateNewTodo}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>

            <div className="w-full">
              <input value={newTodo} onKeyDown={handleNewTodoChange} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.currentTarget.value)} type="text" placeholder="add todo here" className="border-0 focus:ring-0 w-full" />
            </div>
          </div>

          <hr />
          {/* completed todo items */}
          <div className="mt-4">
            <ul>
              {todoItems
                .filter((todoItem) => todoItem.isChecked)
                .map((todo: TodoType) => (
                  <li key={todo.id} className="w-full rounded-t-lg">
                    <div className="flex items-center pl-3">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateTodoItem<TodoType, "isChecked">(todo.id, "isChecked", e.currentTarget.checked)}
                        checked={todo.isChecked}
                        type="checkbox"
                        className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <input disabled type="text" className="mx-2 border-0 focus:ring-0 w-full italic line-through text-neutral-800" value={todo.description} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
