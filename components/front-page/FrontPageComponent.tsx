import styles from "../../styles/FrontPageComponent.module.css";
import Todo from "../../types/Todo";
import TodoList from "../todo/TodoList";

interface FrontPageComponentProps {
  todos: Todo[];
}

const FrontPageComponent = ({ todos }: FrontPageComponentProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["todo-list"]}>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default FrontPageComponent;
