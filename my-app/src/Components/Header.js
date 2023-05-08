import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logoKasa from "../Styles/Assets/Vector.png";

function Header() {
  return (
    <div className="header">
      <figure>
        <img
          className="logo-kasa"
          src={logoKasa}
          alt="logo Kasa"
          width="210px"
        />
      </figure>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
// eviter d'utiliser les accolades au moment de l'import
