import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  console.log("Contact");
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
