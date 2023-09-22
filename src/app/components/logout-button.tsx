import Link from "next/link";
import styles from "./logout-button.module.css";

export default function LogOutButton() {
  return (
    <Link className={styles.button} href="/logout">
      <span className={styles.label}>Logg ut</span>
    </Link>
  );
}
