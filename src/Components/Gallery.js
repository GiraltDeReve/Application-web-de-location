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

// function Gallery() {
//   const titleCoverPairs = logements.map((logement) => ({
//     title: logement.title,
//     cover: logement.cover,
//   }));

//   const titles = [...new Set(logements.map((logement) => logement.title))];
//   //   avec les méthodes set et map, évite les doublons s'il y en avait

//   return (
//     <div>
//       <section id="gallery-section">
//         <ul id="gallery-items">
//           {titles.map((title, index) => {
//             // Pour chaque titre, chercher la paire titre et couverture correspondante dans le tableau titleCoverPairs
//             const matchingPair = titleCoverPairs.find(
//               (pair) => pair.title === title
//             );
//             return (
//               <li className="gallery-item" key={index}>
//                 <h2 className="gallery-item-title">{title}</h2>
//                 <img
//                   className="gallery-item-image"
//                   src={matchingPair.cover}
//                   alt={`image représentant ${title}`}
//                 />
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </div>
//   );
// }

export default Gallery;
