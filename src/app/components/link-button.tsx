import { ReactNode } from "react";
import styles from "./link-button.module.css";

interface LinkButtonProps {
  backgroundColor: string;
  icon: ReactNode;
  label: string;
}

export default function LinkButton(props: LinkButtonProps){
  return (
    <div className={styles.container}>
      <div className={styles.button} style={{backgroundColor: props.backgroundColor}}>
        {props.icon}
      </div>
      <span className={styles.label}>{props.label}</span>
    </div>
  )
}