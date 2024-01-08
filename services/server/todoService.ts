import connectDatabase from "@/lib/connectDatabase";
import { Todo } from "@/types/Todo";

async function getAll(): Promise<Todo[]> {
  const db = await connectDatabase();
  return await db.all("SELECT * FROM todos ORDER BY created_at DESC");
}

async function create(todo: Todo): Promise<Todo> {
  const db = await connectDatabase();

  await db.run(
    "INSERT INTO todos (content, completed, created_at) VALUES (?, ?, ?)",
    todo.content,
    todo.completed ? 1 : 0,
    todo.created_at,
  );

  return todo;
}

async function deleteOne(id: number): Promise<void> {
  const db = await connectDatabase();
  await db.run("DELETE FROM todos WHERE id = ?", id);
  return;
}

async function changeStatus(id: number, completed: boolean): Promise<void> {
  const db = await connectDatabase();
  await db.run(
    "UPDATE todos SET completed = ? WHERE id = ?",
    completed ? 1 : 0,
    id,
  );
  return;
}

const todoService = { getAll, deleteOne, create, changeStatus };

export default todoService;
