import { useParams } from "react-router-dom";
import dataJson from "../../data/data.json";
import Carousel from "./Carousel";
import Collapses from "../Collapses/Collapses";
import styles from "./DetailAppartment.module.css";
import CollapsesArray from "../Collapses/CollapsesArray";
import Error from "../Error/Error";

function DetailPage() {
  // on recherce l'id dans le fichier JSON contenant tous les logements
  const { id } = useParams();
  const indexJson = dataJson.find((Index) => Index.id === id);

  // si l'id n'est pas trouvé alors on renvoie vers la page d'acceuil
  if (indexJson == null) {
    return <Error />;
  }
  // création tableau Tags (mots-clés) et range => nombre d'étoiles
  const arrayTags = indexJson.tags;
  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      <div>
        <Carousel pictures={indexJson.pictures} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h1>{indexJson.title}</h1>
          <p>{indexJson.location}</p>
          <div className={styles.tagsContainer}>
            {arrayTags.map((tags) => (
              <p>{tags}</p>
            ))}
          </div>
        </div>
        <div className={styles.hostContainer}>
          <div className={styles.hostInformation}>
            <p>{indexJson.host.name}</p>
            <img src={indexJson.host.picture} alt="" />
          </div>
          <div className={styles.stars}>
            {range.map((range) =>
              indexJson.rating >= range ? (
                <span className={styles.starSolid}>
                  <i className="fa-solid fa-star"></i>
                </span>
              ) : (
                <span className={styles.starEmpty}>
                  <i className="fa-solid fa-star"></i>
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.collapsesMain}>
        <div className={styles.collapses}>
          <Collapses description={indexJson.description} name="Desciption" />
        </div>
        <div className={styles.collapses}>
          <CollapsesArray
            description={indexJson.equipments}
            name="Équipments"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
