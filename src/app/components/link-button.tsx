import { ReactNode } from "react";
import Link from "next/link";
import styles from "./link-button.module.css";

interface LinkButtonProps {
  backgroundColor: string;
  icon: ReactNode;
  label: string;
  to: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <div className={styles.container}>
      <Link
        href={props.to}
        className={styles.button}
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.icon}
      </Link>
      <span className={styles.label}>{props.label}</span>
    </div>
  );
}
