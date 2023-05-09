import "../Styles/gallery.css";
import { Link } from "react-router-dom";
import imageNotFound from "../Styles/Assets/image-not-found.png";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="gallery-item">
      {cover ? (
        // vérifie qu'un image est disponible sinon la remplace avec un autre d'erreur
        <img
          className="gallery-item-image"
          src={cover}
          alt={`image représentant ${title}`}
        />
      ) : (
        <img
          className="gallery-item-image"
          src={imageNotFound}
          alt={`image représentant ${title}`}
        />
        // permet d'afficher une image d'erreur si l'image du logement n'est pas diponible
      )}
      {title ? (
        <h2 className="gallery-item-title">{title}</h2>
      ) : (
        <div className="gallery-item-title">No title available</div>
      )}
    </Link>
  );
}
export default Card;
