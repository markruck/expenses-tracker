import { MainNav } from "./main-nav";
import UserButton from "./user-button";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <MainNav />
      <UserButton />
    </header>
  );
}
