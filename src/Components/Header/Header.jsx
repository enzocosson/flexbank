import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.scss";

function Header() {
  const location = useLocation();

  const homeClass = classNames({
    [styles.active]: location.pathname === "/",
  });

  const partnersClass = classNames({
    [styles.active]: location.pathname === "/partners",
  });

  const contactClass = classNames({
    [styles.active]: location.pathname === "/contact",
  });

  return (
    <header className={styles.header}>
      <h1>FlexBank</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className={homeClass}>Home</Link>
          </li>
          <li>
            <Link to="/partners" className={partnersClass}>Partners</Link>
          </li>
          <li>
            <Link to="/contact" className={contactClass}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.log}>
        <Link to="/login" className={styles.login}>Login</Link>
        <Link to="/signup" className={styles.signup}>Signup</Link>
      </div>
    </header>
  );
}

export default Header;
