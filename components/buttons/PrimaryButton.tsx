import { ReactNode } from "react";
import styles from "../../styles/buttons/PrimaryButton.module.css";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return <button className={styles["button"]} onClick={onClick}>{children}</button>;
};

export default PrimaryButton;
