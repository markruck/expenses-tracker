"use client";

import React from "react";
import Link from "next/link";
import styles from "./main-nav.module.css";
import { usePathname } from 'next/navigation'

/**
 * The main navigation component
 * @example
 * <MainNav />
 */

const MainNav = () => {
  const pathName = usePathname();
  return (
    <div className={styles['nav-container']}>
      <Link className={pathName === '/' ? styles.activeLink : ''} href="/" title="Home">
        Home
      </Link>
      <Link className={pathName === '/income' ? styles.activeLink : ''} href="/income" title="Income">
        Income
      </Link>
      <Link className={pathName === '/expenses' ? styles.activeLink : ''} href="/expenses" title="Expenses">
        Expenses
      </Link>
      <Link className={pathName === '/error' ? styles.activeLink : ''} href="/error" title="Error">
        Error
      </Link>
    </div>
  );
}

export default MainNav;
