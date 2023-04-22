import "../Styles/Header.css";
import logoKasa from "../Styles/Assets/Vector.png";

function Header() {
  const h1 = "Kasa";
  return (
    <div id="header">
      <h1>{h1}</h1>
      <figure>
        <img id="logo-kasa" src={logoKasa} alt="logo Kasa" width="210px" />
      </figure>
      <nav>
        <a href="index.html">Accueil</a>
        <a href="">A Propos</a>
      </nav>
    </div>
  );
}

export default Header;
// eviter d'utiliser les accolades au moment de l'import
