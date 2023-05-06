import { useState } from "react";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerclass = classNames({
    [styles.burger]: true,
    [styles.burger__active]: isMenuOpen,
  });
  const navbarclass = classNames({
    [styles.navbar]: true,
    [styles.navbar__active]: isMenuOpen,
  });

  function handleClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={`${styles.logo}`} onClick={() => handleClick()}>
        FlexBank
      </Link>
      <div className={navbarclass}>
        <nav>
          <ul>
            <li>
              <Link to="/" className={homeClass} onClick={() => handleClick()}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className={partnersClass}
                onClick={() => handleClick()}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={contactClass}
                onClick={() => handleClick()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.log}>
          <Link
            to="/login"
            className={styles.login}
            onClick={() => handleClick()}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={styles.signup}
            onClick={() => handleClick()}
          >
            Signup
          </Link>
        </div>
      </div>
      <button class={burgerclass} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div class={styles.line}></div>
        <div class={styles.line}></div>
        <div class={styles.line}></div>
      </button>
    </header>
  );
}

export default Header;
