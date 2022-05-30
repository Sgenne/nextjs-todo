import { ReactElement } from "react";
import styles from "../../styles/layout/Layout.module.css";
import Link from "../../types/Link";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactElement;
};

const DUMMY_LINKS: Link[] = [
  {
    title: "Wow",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "these",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "are",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
  {
    title: "links",
    url: "https://nextjs.org/docs/api-reference/next/link",
  },
];

// Separate navbar to its own component
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar links={DUMMY_LINKS}/>
      {children}
    </div>
  );
};

export default Layout;
