function Header() {
  const h1 = "Ksa";
  const logo = "./Assets/Vector.png";
  return (
    <h1>
      {h1.slice(0, 1)}
      <img src={logo} alt="logo Kasa" />
      {h1.slice(1, 3)}
    </h1>
  );
}

export default Header;
// eviter d'utiliser les accolades au moment de l'import
