import styles from "./About.module.css";
import { collapseData } from "../../data/Collapse";
import DescriptionAbout from "./DescriptionAbout";
import pictureAbout from "../../pictures/kalen-emsley-Bkci_8qcdvQ-unsplash.png";

function About() {

  return (
    <div className={styles.aboutContainer}>
      <div>
        <img src={pictureAbout} alt="Fond d'écran d'un paysage relaxant" />
      </div>
      <div className={styles.collapses}>
        {collapseData.map((collapse) => (
            <div key={collapse.id}>
              <DescriptionAbout 
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
