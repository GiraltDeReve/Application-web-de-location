import "../Styles/Banner.css";
import imageBanner from "../Styles/Assets/paysage-montagne.png";

function Banner() {
  const textBanner = "Chez vous, partout et ailleurs";

  return (
    <section id="banner">
      <img src={imageBanner} alt="image montagne" />
      <h2> {textBanner} </h2>
    </section>
  );
}

export default Banner;
