import "../Styles/Footer.css";
import imageFooter from "../Styles/Assets/Logo-copyright.png";

function Footer() {
  return (
    <section id="footer">
      <img src={imageFooter} alt="Copyright Logo" />
    </section>
  );
}

export default Footer;
