import "../Styles/banner.css";
import { useLocation } from "react-router-dom";
import paysageMontagne from "../Styles/Assets/paysage-montagne.png";
import paysageForet from "../Styles/Assets/paysage-foret.png";

function Banner() {
  const location = useLocation();
  //  hook useLocation = récupérer la localisation actuelle

  // selon le nom de la localisation (location.pathname), bannerContent a un contenu différent
  
  const bannerContent = (
    <div className="banner">
      <img
        className="image-banner"
        key={"home-image"}
        src={location.pathname === "/" ? paysageMontagne : paysageForet}
        alt="Image de montagne"
      />
      {location.pathname === "/" && <h2 className="titleBanner">Chez vous, partout et ailleurs</h2>}
    </div>
  );

  return <section className="sectionBanner">{bannerContent}</section>;
}

export default Banner;

