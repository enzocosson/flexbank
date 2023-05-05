import { useLocation, Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const location = useLocation();

  return (
    <header>
      <h1>FlexBank</h1>
      <nav>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">home</Link>
          </li>
          <li className={location.pathname === "/partners" ? "active" : ""}>
            <Link to="/partners">partners</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
