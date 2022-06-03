import styles from "../../styles/todo/TodoList.module.css";
import Todo from "../../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  const todoListItems = todos.map((todo) => (
    <li className={styles["todo-item"]} key={todo.addedOn.getTime()}>
      <TodoItem todo={todo} />
    </li>
  ));

  return <ul className={styles["todo-list"]}>{todoListItems}</ul>;
};

export default TodoList;
