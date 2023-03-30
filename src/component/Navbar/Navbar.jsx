import LogoNav from "../../pictures/logoHeader.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div>
        <img src={LogoNav} alt="Logo du Header" />
      </div>
      <nav>
        <ul className={styles.ulNavigation}>
          <li>
            <Link to="/"> Acceuil </Link>
          </li>
          <li>
            <Link to="/about"> A Propos </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
