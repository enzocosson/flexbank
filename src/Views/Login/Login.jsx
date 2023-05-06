import React from "react";
import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Welcome to Login</h1>
    </div>
  );
}

export default Login;
