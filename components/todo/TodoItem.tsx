import Todo from "../../types/Todo";
import styles from "../../styles/todo/TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={styles["todo-item"]}>
      <span className={styles["title"]}>{todo.title}</span>
      <span className={styles["checkbox-container"]}>
        <input type="checkbox" />
        <span className={styles["checkbox"]}></span>
      </span>
    </div>
  );
};

export default TodoItem;
