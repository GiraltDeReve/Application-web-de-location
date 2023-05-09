import "../Styles/footer.css";
import imageFooter from "../Styles/Assets/Logo-copyright.png";

function Footer() {
  return (
    <section className="footer">
      <img src={imageFooter} alt="Copyright Logo" />
    </section>
  );
}

export default Footer;
