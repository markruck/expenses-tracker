// A loading screen to show while loading

import React from "react";
import styles from "./loadingScreen.module.css";

/**
 * A loading screen to show while loading
 * @example
 * <LoadingScreen />
 * @returns {React.Component} The LoadingScreen component
 */

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default LoadingScreen;