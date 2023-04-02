import { Link } from 'react-router-dom'
import styles from "./Error.module.css"

function Error() {
  return (
    <div className={styles.mainError}>
      <h1> 404 </h1>
      <p> Oups! La page que vous demandez n'existe pas. </p>
      {/* Lien vers la page d'acceuil dans le cas d'une erreur d'URL */}
      <Link to="/"> Retourner sur la page d'acceuil </Link>
    </div>
  );
}

export default Error;
