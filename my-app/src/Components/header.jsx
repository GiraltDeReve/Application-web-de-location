import { Link, useLocation } from "react-router-dom";
import "../Styles/header.css";
import logoKasa from "../Styles/Assets/Vector.png";

function Header() {
  const location = useLocation();
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
        <Link
          exact
          to="/"
          className={location.pathname === "/" ? "activeLink" : ""}
        >
          Accueil
        </Link>
        <Link
          exact
          to="/apropos"
          className={location.pathname === "/apropos" ? "activeLink" : ""}
        >
          A propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
// eviter d'utiliser les accolades au moment de l'import
