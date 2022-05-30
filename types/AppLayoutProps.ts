import { AppProps } from "next/dist/shared/lib/router/router";
import LayoutPage from "./LayoutPage";

type AppLayoutProps = AppProps & {
  Component: LayoutPage;
};

export default AppLayoutProps;
