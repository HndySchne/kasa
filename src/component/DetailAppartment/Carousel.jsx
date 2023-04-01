import styles from "./Carousel.module.css";
import { useState } from "react";

function Carousel(pictures) {
  const [pictureActual, setModifyPicture] = useState(0);

  const pictureArray = pictures.pictures;
  const getClassName = (i) => {
    console.log(i, "et : ", pictureActual);
    if (pictureActual === i) return styles.visible;
    return styles.notVisible;
  };

  // passage de +1 à l'index de la photo !
  const next = () => {
    setModifyPicture((pictureActual + 1) % pictureArray.length);
  };

  // previous
  const previous = () => {
    // si on est à zéro en index on prend la longueur max - 1
    if (pictureActual <= 0) {
      setModifyPicture(pictureArray.length - 1);
      return;
    }
    setModifyPicture((pictureActual - 1) % pictureArray.length);
  };

  return (
    <div>
      <div className={styles.Carousel}>
        {pictureArray.map((element, i) => (
          <img
            src={element}
            key={element}
            alt={element}
            className={getClassName(i)}
          />
        ))}
      </div>
      <button onClick={next}>next</button>
      <button onClick={previous}>previous</button>
    </div>
  );
}

export default Carousel;
