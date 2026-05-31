import MainNav from "./main-nav";
import styles from "./header.module.css";

/**
 * The main header component
 * @example
 * <Header />
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <MainNav />
    </header>
  );
}
