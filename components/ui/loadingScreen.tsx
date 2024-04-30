import React from "react";
import styles from "./loadingScreen.module.css";

/**
 * A loading screen to show while loading. Shows a spinner
 * @example
 * <LoadingScreen />
 */

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default LoadingScreen;