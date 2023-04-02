import styles from "./Collapses.module.css";
import { useState } from "react";

function Collapses({ description, name }) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction qui permet de changer le statut du top
  const ShowContent = () => {
    setIsOpen(!isOpen);
  };

  // permet d'appeler dynamiquement la classe hidden ou non pour le texte des collapses
  const showtext = isOpen ? styles.textNotHidden : styles.textHidden;
  // permet d'appeler dynamiquement la classe flèche down lors du clique collapses
  const arrowDirection = isOpen ? styles.arrowUp : "";

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.collapse} onClick={ShowContent}>
        <span>{name}</span>
        <span className={arrowDirection}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
        <div className={showtext}>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default Collapses;
