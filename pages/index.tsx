import { NextPage } from "next";
import todoService from "@/services/server/todoService";
import React, { useContext } from "react";
import { Todo } from "@/types/Todo";
import TaskList from "@/components/organisms/TaskList";
import { TodoContext } from "@/providers/TodoProvider";
import Header from "@/components/organisms/Header";

interface HomeProps {
  todos: Todo[];
}

const IndexPage: NextPage<HomeProps> = ({ todos: initialTodos }) => {
  const { createTodo, setTodos, todos } = useContext(TodoContext);

  React.useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos, setTodos]);

  return (
    <>
      <Header />
      <div className="container">
        <TaskList />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const todos = await todoService.getAll();
  return { props: { todos } };
}

export default IndexPage;
