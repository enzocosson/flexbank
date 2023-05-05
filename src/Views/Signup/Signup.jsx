import React from "react";
import styles from "./Signup.module.scss";

function Signup() {
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Welcome to SignUp</h1>
      <h2>Easy, secure, and convenient banking solutions for all your needs</h2>
    </div>
  );
}

export default Signup;
