import React from "react";

export type TodoType = {
  id: number;
  description: string;
  createdAt: string;
  isChecked: boolean;
};

export type TodoCreateType = Omit<TodoType, "id" | "isChecked" | "createdAt">;

const fetchTodos = () => {
  const t = window.localStorage.getItem("highTodos");

  return !!t ? JSON.parse(t) : [];
};

const saveTodos = (todos: TodoType[]) => {
  window.localStorage.setItem("highTodos", JSON.stringify(todos));
};

export const useTodoItems = () => {
  const [todoItems, setTodoItems] = React.useState<TodoType[]>(fetchTodos());
  const updateTodoItem = <T, K extends keyof T>(todoId: number, field: K, value: T[K]) => {
    setTodoItems((todoItems) => {
      const updatedTodoItems = [
        ...todoItems.filter((todo) => todo.id !== todoId),
        {
          ...todoItems.find((todoItem) => todoItem.id === todoId)!,
          id: todoId,
          [field]: value,
        },
      ].sort((a, b) => a.id - b.id);

      saveTodos(updatedTodoItems);
      return updatedTodoItems;
    });
  };

  const addNewTodoItem = (newTodo: TodoCreateType) => {
    setTodoItems((todoItems) => {
      const updatedTodoItems = [
        ...todoItems,
        {
          ...newTodo,
          id: todoItems.length !== 0 ? todoItems[todoItems.length - 1].id + 1 : 1,
          createdAt: new Date().toDateString(),
          isChecked: false,
        },
      ];

      saveTodos(updatedTodoItems);
      return updatedTodoItems;
    });
  };

  return { todoItems, updateTodoItem, addNewTodoItem };
};
