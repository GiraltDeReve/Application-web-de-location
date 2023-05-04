import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from "../../Data/logements.json";
import Slideshow from "../../Components/Slideshow";
import Collapse from "../../Components/Collapse";
import greyStar from "../../Styles/Assets/grey-star.png";
import redStar from "../../Styles/Assets/red-star.png";
import "../../Styles/Logements.css";


function Logement() {
  
  const [imageSlideshow, setImageSlideshow] = useState([]);
  // State = état local appelé imageSlideshow avec fonction useState qui définir valeur initiale à 0 (tableau vide)
  // setImageSlideshow = fonction qui permet de mettre à jour l'état

	const idLogement = useParams('id').id;
  // extrait id hébergement depuis paramètres d'URL en utilisant le hook useParams
	const dataCurrentLogement = datas.filter(data => data.id === idLogement);
	// filtre les données de l'hébergement actuel en utilisant id hébergement extrait de l'URL
  
	useEffect(() => {
		setImageSlideshow(dataCurrentLogement[0].pictures);
	}, [idLogement]);
  // effet qui se déclenche au changement de l'id de l'hébergement : mises à jour des données de l'hébergement actuel + tableau slideshow

	const name = dataCurrentLogement[0].host.name.split(' '); 
  // divise le nom de l'hote en deux parties 
	const rating = dataCurrentLogement[0].rating;
	const description  = dataCurrentLogement[0].description;
	const equipments = dataCurrentLogement[0].equipments;


	return (
		<>
			<Slideshow imageSlideshow={imageSlideshow}/>
      {/* Cela affiche le diaporama en utilisant le composant Slideshow et en passant les images de l'hébergement actuel à travers la prop imageSlideshow. */}
			<main className="logement">
				<div className="logement-content">
					<div className="logement-infos">
						<h1>{dataCurrentLogement[0].title}</h1>
						<p>{dataCurrentLogement[0].location}</p>
						<div>
							{dataCurrentLogement[0].tags.map((tag, index) => {
                // Cela crée un tableau de cinq étoiles et boucle à travers le tableau en utilisant la méthode map. Dans la boucle, l'index est utilisé pour déterminer si l'étoile doit être rouge ou grise en fonction de la note de l'hébergement.
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="logement-host">
						<div>
							<div className="logement-host-name">
								<span>{name[0]}</span>
                {/* affiche premiére élément nom de l'hote */}
								<span>{name[1]}</span>
                {/* deuxiéme élément */}
							</div>
							<img className ="logement-host-photo" src={dataCurrentLogement[0].host.picture} alt="Photo de l'hôte de ce logement" />
              {/* Affiche l'image de l'hôte de l'hébergement avec propriété "picture" de l'objet "host"  */}
            </div>
							
						<div className="logement-host-notation">
							{/* faire étoile */}
						</div>
					</div>
				</div>
				<div>
						{/*faire logement-collapse  */}
				</div>
			</main>
		</>
	)
}

export default Logement;
