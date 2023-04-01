import { useParams } from "react-router-dom";
import dataJson from "../../data/data.json";
import Carousel from "./Carousel";
import Collapses from "../Collapses/Collapses";
import styles from "./DetailAppartment.module.css";
import CollapsesArray from "../Collapses/CollapsesArray";

function DetailPage() {
  const { id } = useParams();
  const indexJson = dataJson.find((Index) => Index.id === id);
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
          <div>
            {range.map((range) =>
              indexJson.rating >= range ? <span className={styles.starSolid}><i class="fa-solid fa-star"></i></span> : <span className={styles.starEmpty}><i class="fa-solid fa-star"></i></span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.collapsesMain}>
        <Collapses description={indexJson.description} name="Desciption" />
        <CollapsesArray description={indexJson.equipments} name="Équipments" />
      </div>
    </div>
  );
}

export default DetailPage;
