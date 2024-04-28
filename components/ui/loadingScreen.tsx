// A loading screen to show while loading

import React from "react";
import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default LoadingScreen;