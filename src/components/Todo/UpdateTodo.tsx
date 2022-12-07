import { TodoType } from "./hooks/useTodoItems";

type UpdateTodoPropType = {
  updateTodoItem: <T, K extends keyof T>(todoId: number, field: K, value: T[K]) => void;
  todoItems: TodoType[];
};

export const UpdateTodo = ({ updateTodoItem, todoItems }: UpdateTodoPropType) => {
  return (
    <div className="mt-4">
      <ul>
        {todoItems
          .filter((todoItem) => todoItem.isChecked)
          .map((todo) => (
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
  );
};
