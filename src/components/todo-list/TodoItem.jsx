import style from "../css-module/todoItem.module.css";
import btn from "../css-module/form.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteTodo(item) {
    console.log("Delete Todo: " + item);
    setTodos(todos.filter((todo) => todo.name !== item));
  }
  return (
    <div className={style.item}>
      <div className={style.itemContainer}>
        <div className={style.itemName}> {item.name}</div>
        <div className={style.itemButton}>
          <button onClick={() => deleteTodo(item.name)} className={btn.moduleBtn}>
            &#x2718;
          </button>
          <button onClick={() => deleteTodo(item.name)} className={btn.moduleBtn}>
             &#x2714;
          </button>
        </div>
      </div>
      <hr className={style.line} />
    </div>
  );
}
