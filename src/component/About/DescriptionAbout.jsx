import styles from "./About.module.css";
import { useState } from "react";

function DescriptionAbout({ description, name }) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction qui permet de changer le statut du top
  const ShowContent = () => {
    setIsOpen(!isOpen);
  };

  // permet d'appeler dynamiquement la classe hidden ou non
  const showtext = isOpen ? styles.textNotHidden : styles.textHidden;

  return (
    <div className={styles.collapses}>
      <div className={styles.collapse} onClick={ShowContent}>
        {name}
      </div>
      <p className={showtext}>{description}</p>
    </div>
  );
}

export default DescriptionAbout;
