function Banner() {
  const imageBanner = "./Assets/paysage-montagne.png";
  const textBanner = "Chez vous, partout et ailleurs";

  return (
    <section id="banner">
      <img src={imageBanner} alt="image montagne" />
      <h2> {textBanner} </h2>
    </section>
  );
}

export default Banner;
