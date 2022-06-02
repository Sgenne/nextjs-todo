import Todo from "../../types/Todo";
import styles from "../../styles/todo/TodoItem.module.css";
import { toDateString } from "../../utils/date.util";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const date: string = toDateString(todo.addedOn);

  const todoItemClassName = `container-fluid row ${styles["todo-item"]}`;
  const startContainerClassName = `col-8 ${styles["start-container"]}`;
  const endContainerClassName = `col-4 d-flex align-items-center justify-content-around ${styles["end-container"]}`;

  return (
    <div className={todoItemClassName}>
      <div className={startContainerClassName}>
        <span className={styles["title"]}>{todo.title}</span>
      </div>
      <div className={endContainerClassName}>
        <span className={styles["date"]}>{date}</span>
        <span className={styles["checkbox-container"]}>
          <input className={styles["checkbox"]} type="checkbox" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
