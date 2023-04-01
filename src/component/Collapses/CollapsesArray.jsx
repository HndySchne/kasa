import styles from "./Collapses.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

function CollapsesArray({ description, name }) {
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
    <div className={styles.collapses}>
      <div className={styles.collapse} onClick={ShowContent}>
        <span>{name}</span>
        <span className={arrowDirection}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <div className={showtext}>
          {description.map((element) => (
            <span key={element}>{element}</span>
          ))}
      </div>
    </div>
  );
}

CollapsesArray.propTypes = {
  description: PropTypes.array,
  name: PropTypes.string,
};

export default CollapsesArray;
