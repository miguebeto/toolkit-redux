import { useState } from "react";
import {
  useGetTodoQuery,
  useGetTodosQuery,
} from "./store/slices/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
    const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todo === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>Isloading: {isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};
