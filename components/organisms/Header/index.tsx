import Image from "next/image";
import Button from "@/components/atoms/Button";
import React, { useContext } from "react";
import { TodoContext } from "@/providers/TodoProvider";

const Header = () => {
  const { createTodo } = useContext(TodoContext);

  return (
    <header>
      <div className="logo">
        <Image src="/logo.svg" alt="Toodle" height={130 / 2} width={595 / 2} />
      </div>
      <div className="container">
        <form className="todo-form" onSubmit={createTodo}>
          <input
            autoComplete="off"
            name="content"
            type="text"
            className="input"
            placeholder="Yeni bir görev ekle..."
          />
          <Button variant="primary">Ekle</Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
