import classNames from "classnames";
import Checkbox from "@/components/atoms/Checkbox";
import React, { useContext } from "react";

import { Todo } from "@/types/Todo";
import { TodoContext } from "@/providers/TodoProvider";
import DeleteButton from "@/components/molecules/DeleteButton";

interface TaskProps {
  todo: Todo;
}
const Task: React.FC<TaskProps> = ({ todo }) => {
  const { deleteTodo, changeStatus } = useContext(TodoContext);

  return (
    <li
      className={classNames("list-item", { completed: todo.completed })}
      key={todo.id}
    >
      <Checkbox
        defaultChecked={todo.completed}
        onChange={(newStatus) => changeStatus(newStatus, todo.id as number)}
      />
      <span className="text">{todo.content}</span>

      <DeleteButton onClick={() => deleteTodo(todo.id as number)} />
    </li>
  );
};

export default Task;
