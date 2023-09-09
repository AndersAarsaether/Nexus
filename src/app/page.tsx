import LinkButton from "./components/link-button";
import LogOutButton from "./components/logout-button";
import PrimaryButton from "./components/logout-button";
import HeartIcon from "./icons/HeartIcon";
import MoneyIcon from "./icons/MoneyIcon";
import ShoppingcartIcon from "./icons/ShoppincartIcon";
import TodoIcon from "./icons/TodoIcon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meny</h1>
      <div className={styles.linksWrapper}>
        <div className={styles.linkButtonsWrapper}>
          <LinkButton
            backgroundColor="#F0A967"
            icon={<TodoIcon />}
            label="Todo"
            to="/todos"
          />
          <LinkButton
            backgroundColor="#FDFF8A"
            icon={<ShoppingcartIcon />}
            label="Handleliste"
            to="/shoppinglist"
          />
        </div>
        <div className={styles.linkButtonsWrapper}>
          <LinkButton
            backgroundColor="#E287CE"
            icon={<HeartIcon />}
            label="Date nights"
            to="/dates"
          />
          <LinkButton
            backgroundColor="#44EB9F"
            icon={<MoneyIcon />}
            label="Økonomi"
            to="/economy"
          />
        </div>
      </div>
      <div className={styles.logoutButtonWrapper}>
        <LogOutButton />
      </div>
    </div>
  );
}
