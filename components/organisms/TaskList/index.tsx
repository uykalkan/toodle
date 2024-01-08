import React, { useContext } from "react";
import { TodoContext } from "@/providers/TodoProvider";
import Task from "@/components/molecules/Task";

const TaskList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="list task-list">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;
