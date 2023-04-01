import styles from "./About.module.css";
import { dataAbout } from "../../data/dataAbout";
import Collapses from "../Collapses/Collapses";
import pictureAbout from "../../pictures/kalen-emsley-Bkci_8qcdvQ-unsplash.png";

function About() {

  return (
    <div className={styles.aboutContainer}>
      <div>
        <img src={pictureAbout} alt="Fond d'écran d'un paysage relaxant" />
      </div>
      <div className={styles.collapses}>
        {/* On récupère les informations du tableau des données "à propos" et on boucle dessus */}
        {dataAbout.map((collapse) => (
            <div key={collapse.id}>
              <Collapses 
                  description={collapse.description}
                  name={collapse.name}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default About;
