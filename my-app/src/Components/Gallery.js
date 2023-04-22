import logements from "../data/logements.json";
import "../Styles/index.css";

function Gallery() {
  const titleCoverPairs = logements.map((logement) => ({
    title: logement.title,
    cover: logement.cover,
  }));

  const titles = [...new Set(logements.map((logement) => logement.title))];
  //   avec les méthodes set et map, évite les doublons s'il y en avait

  return (
    <div>
      <section id="gallery-section">
        <ul id="gallery-items">
          {titles.map((title, index) => {
            // Pour chaque titre, chercher la paire titre et couverture correspondante dans le tableau titleCoverPairs
            const matchingPair = titleCoverPairs.find(
              (pair) => pair.title === title
            );
            return (
              <li className="gallery-item" key={index}>
                <h2 className="gallery-item-title">{title}</h2>
                <img
                  className="gallery-item-image"
                  src={matchingPair.cover}
                  alt={`image représentant ${title}`}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Gallery;
