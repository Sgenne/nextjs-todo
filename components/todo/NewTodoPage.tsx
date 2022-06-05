import styles from "../../styles/todo/NewTodoPage.module.css";

const NewTodoPage = () => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles["page"]}`}
    >
      <div className={styles["new-todo-area"]}>
        <div className={styles["title-container"]}>
          <label htmlFor="title-input">Enter a title:</label>
          <input id="title-input" className={styles["title-input"]} type="text" />
        </div>
        <div className={styles["description-input-container"]}>
          <label htmlFor="description-input">Enter a description:</label>
          <textarea
            id="description-input"
            className={styles["description-input"]}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NewTodoPage;
