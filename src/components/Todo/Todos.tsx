type TodosPropsType = {
  todos: TodoType[];
};

type TodoType = {
  id: number;
  description: string;
  createdAt: string;
};

export const TodosComponent = ({ todos }: TodosPropsType) => {
  return (
    <div className="table-cell align-middle pr-8">
      <div className="border-2 rounded-md border-gray-200 dark:border-gray-600">
        <div className="p-4">
          <p className="px-2 py-3 text-xl font-bold">🪴 Essential Todo's</p>
          <ul>
            {todos.map((todo: TodoType) => (
              <li key={todo.id} className="w-full rounded-t-lg">
                <div className="flex items-center pl-3">
                  <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                  <label htmlFor="vue-checkbox" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                    {todo.description}
                  </label>
                </div>
              </li>
            ))}
          </ul>

          {/* <input type="text" placeholder="enter todo item here" />
          <button>add todo</button> */}
        </div>
      </div>
    </div>
  );
};
