import datas from "../Data/logements.json";
import "../Styles/Gallery.css";
import Card from "../Components/Card";

function Gallery() {
  return (
    <main className="gallery-section">
      <div className="gallery-items">
        {datas.map((data) => {
          // pour chaque objet boucle avec map pour faire tableau et
          return (
            <Card
              key={data.id}
              id={data.id}
              // pour définir path
              title={data.title}
              cover={data.cover}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Gallery;
