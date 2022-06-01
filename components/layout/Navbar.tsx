import NextLink from "next/link";
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
  const logoContainerClassName = `col-6 d-flex align-items-center ms-5 px-5`;
  const logoClassName = `d-flex align-items-center ${styles["logo"]}`;
  const linksListClassName = `col-6 d-flex flex-row justify-content-around align-items-center px-5 ${styles.links}`;

  return (
    <nav className={navClassName}>
      <div className={logoContainerClassName}>
        <NextLink href="/">
          <h1 className={logoClassName}>Todo App</h1>
        </NextLink>
      </div>
      <div className={linksListClassName}>{linkComponents}</div>
    </nav>
  );
};

export default Navbar;
