"use client";

import React from "react";
import Link from "next/link";
import styles from "./main-nav.module.css";

/**
 * The main navigation component
 * @example
 * <MainNav />
 * @returns {React.Component} The MainNav component
 */

const MainNav = () => {
  return (
    <div className={styles['nav-container']}>
      <Link href="/" title="Home">
        Home
      </Link>
      <Link href="/income" title="Income">
        Income
      </Link>
      <Link href="/expenses" title="Expenses">
        Expenses
      </Link>
      <Link href="/error" title="Error">
        Error
      </Link>
    </div>
  );
}

export default MainNav;
