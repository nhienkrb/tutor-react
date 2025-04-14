import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
