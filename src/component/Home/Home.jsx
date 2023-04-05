import dataJson from "../../data/data.json";
import picture from "../../pictures/homeBg.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    // Page d'accueil avec le titre + image et une boucle sur les cards provenant du fichier Json 
    // chaque card portant un lien (id du logement) qui permet d'afficher dynamioquement le contenu de la page détail 
    <div className={styles.HomePage}>
      <div className={styles.imageTitle}>
      <img src={picture} alt="description de la page d'accueil " />
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.cards}>
        {dataJson.map((data) => (
          <Link to={"/detail/" + data.id} className={styles.link} key={data.id}>
            <div className={styles.Card}>
              <img
                className={styles.imgCard}
                src={data.cover}
                alt={data.description}
              ></img>
              <p>{data.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
