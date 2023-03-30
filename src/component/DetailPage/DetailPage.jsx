import { useParams } from "react-router-dom";
import dataJson from "../../data/data.json";
import Carousel from "./Carousel";

function DetailPage() {
  const { id } = useParams();
  const indexJson = dataJson.find((Index) => Index.id === id);
  const arrayPictures = indexJson.pictures;

  return (
    <div>
      <div>
        <Carousel pictures={indexJson.pictures} />
      </div>
      <p>{indexJson.description}</p>
    </div>
  );
}

export default DetailPage;
