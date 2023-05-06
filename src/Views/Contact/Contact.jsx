import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  console.log("Contact");
  return (
    <div className={styles.main}>
      <img className={styles.background} src="./images/background.jpg" alt="" />
      <h1>Contact</h1>
      <h2>Easy, secure, and convenient banking solutions for all your needs</h2>
    </div>
  );
}

export default Contact;
