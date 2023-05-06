import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.container__footer}>
        <h5>FlexBank</h5>
        <div className={styles.link}>
          <div className={styles.contact}>
            <h6>Contact</h6>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@flexbank.com</p>
            <p>Address: 123 Main Street, Anytown USA</p>
          </div>
          <div className={styles.legal}>
            <h6>Legal</h6>
            <p>Security</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.social}>
            <h6>Social</h6>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>

          <img className={styles.back__card} src="images/back.png" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
