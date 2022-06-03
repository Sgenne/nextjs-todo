import { useRouter } from "next/router";

import FrontPageComponent from "../components/front-page/FrontPageComponent";
import LayoutPage from "../types/LayoutPage";
import Todo from "../types/Todo";
import { NEW_TODO_URL } from "./todo/new";

const DUMMY_TODOS: Todo[] = [
  {
    title: "Shower Cat",
    addedOn: new Date(),
    description: "Take a shower with your cat ;)",
    isDone: false,
  },
  {
    title: "Shower Dog",
    addedOn: new Date(),
    description: "Take a shower with your dog ;)",
    isDone: false,
  },
  {
    title: "Take out trash",
    addedOn: new Date(),
    description: "Take a shower with your trash ;)",
    isDone: false,
  },
];

export const FRONT_PAGE_URL = "/";

const FrontPage: LayoutPage = () => {
  const router = useRouter();

  const addTodoClickHandler = () => router.push(NEW_TODO_URL);

  return <FrontPageComponent todos={DUMMY_TODOS} onAddTodoClick={addTodoClickHandler} />;
};

export default FrontPage;
