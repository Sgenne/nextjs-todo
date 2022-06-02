import { ReactElement } from "react";
import styles from "../../styles/layout/Layout.module.css";
import Link from "../../types/Link";
import Background from "./Background";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactElement;
};

const DUMMY_LINKS: Link[] = [
  {
    title: "Todo List",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "History",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "New Todo",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
];

// Separate navbar to its own component
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["navbar"]}>
        <Navbar links={DUMMY_LINKS} />
      </div>
      <div className={styles["content"]}>
        <Background />
        {children}
      </div>
    </div>
  );
};

export default Layout;
