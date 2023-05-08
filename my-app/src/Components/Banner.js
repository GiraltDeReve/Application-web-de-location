import "../Styles/Banner.css";
import { useLocation } from "react-router-dom";
import paysageMontagne from "../Styles/Assets/paysage-montagne.png";
import paysageForet from "../Styles/Assets/paysage-foret.png";

function Banner() {
  const location = useLocation();
  //  hook useLocation = récupérer la localisation actuelle

  let bannerContent;

  // selon le nom de la localisation (location.pathname), bannerContent a un contenu différent
  if (location.pathname === "/") {
    bannerContent = (
      <div className="banner">
        <img
          className="image-banner"
          key={"home-image"}
          src={paysageMontagne}
          alt="Image de montagne"
        />
        <h2 className="titleBanner">Chez vous, partout et ailleurs</h2>
      </div>
    );
  } else if (location.pathname === "/apropos") {
    bannerContent = (
      <div className="banner">
        <img
          className="image-banner"
          key={"about-image"}
          src={paysageForet}
          alt="Image de foret"
        />
        <h2 className="titleBanner"></h2>
      </div>
    );
  }

  return <section className="sectionBanner">{bannerContent}</section>;
}

export default Banner;
