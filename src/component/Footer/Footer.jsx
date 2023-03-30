import LogoFooter from "../../pictures/logoFooter.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="Logo du footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
