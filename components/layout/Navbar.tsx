import styles from "../../styles/layout/Navbar.module.css";
import Link from "../../types/Link";
import NavbarButton from "./NavbarButton";

type NavbarProps = {
  links: Link[];
};

const Navbar = ({ links }: NavbarProps) => {
  const linkComponents = links.map((link: Link) => (
    <li key={link.title + link.url}>
      <NavbarButton link={link} />
    </li>
  ));

  const navClassName = `d-flex justify-content-start ${styles.navbar}`;
  const logoClassName = `col-6 d-flex align-items-center ms-5 px-5 ${styles.logo}`;
  const linksListClassName = `col-6 d-flex flex-row justify-content-around px-5 ${styles.links}`;

  return (
    <nav className={navClassName}>
      <h1 className={logoClassName}>Todo App</h1>
      <div className={linksListClassName}>{linkComponents}</div>
    </nav>
  );
};

export default Navbar;
