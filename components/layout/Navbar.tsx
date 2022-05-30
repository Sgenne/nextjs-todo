import NextLink from "next/link";
import styles from "../../styles/layout/Navbar.module.css";
import Link from "../../types/Link";

type NavbarProps = {
  links: Link[];
};

const Navbar = ({ links }: NavbarProps) => {
  const linkComponents = links.map((link: Link) => (
    <li key={link.title + link.url}>
      <NextLink href={link.url}>
        <a>{link.title}</a>
      </NextLink>
    </li>
  ));

  const navClassName = `container-fluid row g-0 px-2 d-flex align-items-center ${styles.navbar}`;
  const linksListClassName = `col-6 d-flex flex-row justify-content-around my-auto ${styles.links}`;

  return (
    <nav className={navClassName}>
      <div className={`col-6 ps-5 ${styles.logo}`}>
        <h1>Logo</h1>
      </div>
      <ul className={linksListClassName}>{linkComponents}</ul>
    </nav>
  );
};

export default Navbar;
