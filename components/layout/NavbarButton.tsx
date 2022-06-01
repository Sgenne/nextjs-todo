import NextLink from "next/link";
import Link from "../../types/Link";
import styles from "../../styles/layout/NavbarButton.module.css";

interface NavbarButtonProps {
  link: Link;
}

const NavbarButton = ({ link }: NavbarButtonProps) => {
  return (
    <button className={styles.button}>
      <NextLink href={link.url}>{link.title}</NextLink>
    </button>
  );
};

export default NavbarButton;
