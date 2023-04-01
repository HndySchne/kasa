import dataJson from "../../data/data.json";
import picture from "../../pictures/homeBg.png";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.imageTitle}>
      <img src={picture} alt="description de la page d'accueil " />
      <p>Chez vous, partout et ailleurs</p>
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
