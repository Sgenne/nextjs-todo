import styles from "../../styles/FrontPageComponent.module.css";
import Todo from "../../types/Todo";
import PrimaryButton from "../buttons/PrimaryButton";
import TodoList from "../todo/TodoList";

interface FrontPageComponentProps {
  todos: Todo[];
  onAddTodoClick: () => void;
}

const FrontPageComponent = ({
  todos,
  onAddTodoClick,
}: FrontPageComponentProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["todo-list"]}>
        <div className="d-flex justify-content-end mb-3">
          <PrimaryButton onClick={onAddTodoClick}>Add new todo</PrimaryButton>
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default FrontPageComponent;
