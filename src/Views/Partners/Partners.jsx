import React from "react";
import styles from "./Partners.module.scss";

function Partners() {
  console.log("Partners");
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Partners</h1>
    </div>
  );
}

export default Partners;
