import FrontPageComponent from "../components/front-page/FrontPageComponent";
import LayoutPage from "../types/LayoutPage";
import Todo from "../types/Todo";

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

const FrontPage: LayoutPage = () => {
  return <FrontPageComponent todos={DUMMY_TODOS} />;
};

export default FrontPage;
