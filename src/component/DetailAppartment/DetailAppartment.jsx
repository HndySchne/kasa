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

  // si l'id n'est pas trouvé alors on renvoie vers la page d'erreurs
  if (indexJson == null) {
    return <Error />;
  }
  // création tableau Tags (mots-clés) et range => nombre d'étoiles
  const arrayTags = indexJson.tags;
  const range = [1, 2, 3, 4, 5];

  return (
    <main>
      {/* appel du JSX carousel qui permet de scroller les images  */}
      <div>
        <Carousel pictures={indexJson.pictures} />
      </div>
      {/* Titre leix et tags du logment */}
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h2>{indexJson.title}</h2>
          <p>{indexJson.location}</p>
          <div className={styles.tagsContainer}>
            {arrayTags.map((tags) => (
              <p key={tags}>{tags}</p>
            ))}
          </div>
        </div>
        {/* Nom prénoms et nombre d'étoiles de l'hôte  */}
        <div className={styles.hostContainer}>
          <div className={styles.hostInformation}>
            <p>{indexJson.host.name}</p>
            <img src={indexJson.host.picture} alt="" />
          </div>
          <div className={styles.stars}>
            {/* Dans le cas où on a le nombre provenant du fichier Json > = au nombre de la constante  */}
            {/* On met une étoile pleine, sinon on mets une étoile vide  */}
            {range.map((range) =>
              indexJson.rating >= range ? (
                <span key={range} className={styles.starSolid}>
                  <i className="fa-solid fa-star"></i>
                </span>
              ) : (
                <span key={range} className={styles.starEmpty}>
                  <i className="fa-solid fa-star"></i>
                </span>
              )
            )}
          </div>
        </div>
      </div>
      {/* On appelle le fichier JSX Collapses avec en entrée une description string et le nom */}
      <div className={styles.collapsesMain}>
        <div className={styles.collapses}>
          <Collapses description={indexJson.description} name="Desciption" />
        </div>
        {/* On appelle le fichier JSX CollapsesArray avec en entrée une description Array et le nom */}
        <div className={styles.collapses}>
          <CollapsesArray
            description={indexJson.equipments}
            name="Équipments"
          />
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
