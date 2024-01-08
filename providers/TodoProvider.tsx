import React, { createContext, FC, PropsWithChildren } from "react";
import api from "@/services/client/api";
import { Todo } from "@/types/Todo";

export const TodoContext = createContext({
  todos: [] as Todo[],
  createTodo: (event: React.FormEvent<HTMLFormElement>) => {},
  deleteTodo: (id: number) => {},
  changeStatus: (checked: boolean, id: number) => {},
  setTodos: (todos: Todo[]) => {},
});

const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const createTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = event.currentTarget.content.value;

    if (!event.currentTarget.content.value) {
      event.currentTarget.content.focus();
      return;
    }

    event.currentTarget.reset();

    api
      .post<Todo[]>("/api/todo", {
        content,
        completed: false,
        created_at: new Date(),
      })
      .then((resp) => {
        const todos = resp.data;
        setTodos([...todos]);
      });
  };

  const deleteTodo = async (id: number) => {
    if (!window.confirm("Silmek istediğinize emin misiniz?")) {
      return;
    }
    api.delete<Todo[]>("/api/todo", { params: { id } }).then((resp) => {
      const todos = resp.data;
      setTodos([...todos]);
    });
  };

  const changeStatus = async (checked: boolean, id: number) => {
    api.put<Todo[]>("/api/todo", { id, completed: checked }).then((resp) => {
      const todos = resp.data;
      setTodos([...todos]);
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, createTodo, deleteTodo, changeStatus, setTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
