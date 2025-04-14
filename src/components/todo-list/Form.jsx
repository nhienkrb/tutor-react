import { useState } from "react";
import style from "../css-module/form.module.css";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"", completed: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos);
  }
  return (
    <form className={style.todoForm} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.moduleInput}
          onChange={(e) => setTodo({name: e.target.value, completed: false})}
          value={todo.name}
          type="text"
          placeholder="Enter a todo"
        />
        <button className={style.moduleBtn} type="submit">
          Add 
        </button>
      </div>
    </form>
  );
}
