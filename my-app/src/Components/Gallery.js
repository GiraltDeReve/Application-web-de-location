import datas from "../Data/logements.json";
import "../Styles/Gallery.css";
import Card from "../Components/Card";

function Gallery() {
  return (
    <main className="gallery-section">
      <div id="gallery-items">
        {datas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
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
