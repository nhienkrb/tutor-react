import TodoItem from "./TodoItem";
import { useState } from "react";

import style from "../css-module/todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const [active, setActive] = useState(true); // ✅ dùng state

  function activeOn() {
    setActive(!active); // ✅ cập nhật state
  }
  return (
    <div className={style.todoListContainer}>
      <div className={style.statusTodo}>
        <button
          onClick={activeOn}
          className={`${style.moduleBtn} ${active ? style.active : ""}`} // ✅ điều kiện
        >
          Todo
        </button>
        <button
          onClick={activeOn}
          className={`${style.moduleBtn} ${!active ? style.active : ""}`} // ✅ điều kiện
        >
          Done
        </button>      </div>

      <div className={style.todoList}>
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
}
