import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  console.log("Contact");
  return (
    <div className={styles.main}>
      <h2>Contact</h2>
      <p>Bienvenue sur la page d'accueil de mon application React.</p>
    </div>
  );
}

export default Contact;
