import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";
import datas from "../../Data/logements.json";
import Slideshow from "../../Components/slideshow";
import Collapse from "../../Components/collapse";
import "../../Styles/collapse.css";
import greyStar from "../../Styles/Assets/grey-star.png";
import redStar from "../../Styles/Assets/red-star.png";
import "../../Styles/logements.css";


function Logement() {
  
  const [imageSlideshow, setImageSlideshow] = useState([]);
  // State = état local appelé imageSlideshow avec fonction useState qui définir valeur initiale à 0 (tableau vide)
  // setImageSlideshow = fonction qui permet de mettre à jour l'état

	const idLogement = useParams('id').id;
  // extrait id hébergement depuis paramètres d'URL en utilisant le hook useParams
	const dataLogement = datas.filter(data => data.id === idLogement);
	// filtre les données de l'hébergement actuel en utilisant id hébergement extrait de l'URL
	// Attention = méthode filter() retourne un tableau avec un seul élément. Pour le récup, il faudra utiliser l'indice [0] même si 1 seul élément.
	
	useEffect(() => {
		if (dataLogement.length !== 0) {
			// on vérifie que le tableau n'est pas vide parce que l'id n'existerai pas
		  setImageSlideshow(dataLogement[0].pictures);
		  // effet qui se déclenche au changement de l'id de l'hébergement : mises à jour des données de l'hébergement actuel + tableau slideshow
		}
	  }, [dataLogement, idLogement]);
	
	if (dataLogement.length === 0) {
		// si tableau vide,redirection sur page error
		return <Navigate to="/404" />;
	}

	const name = dataLogement [0].host.name.split(' '); 
  // divise le nom de l'hote en deux parties 
	const rating = dataLogement [0].rating;
	const description  = dataLogement [0].description;
	const equipments = dataLogement [0].equipments;
	const equipmentsList = equipments.map((equipment, index) => (
		<li key={index}>{equipment}</li>
		// pour faire une list d'équipments
	  ));

	const stars = [];
	  for (let i = 1; i <= 5; i++) {
		const starColor = i <= rating ? redStar : greyStar;
		stars.push(<img key={i} src={starColor} alt={`Étoile ${i}`} />);
	  }

	return (
		<>
			<Slideshow imageSlideshow={imageSlideshow}/>
      {/* affiche slideshow en passant les images de l'hébergement actuel grace a la prop imageSlideshow. */}
			<main className="logement">
				<div className="logement-content">
					<div className="logement-infos">
						<h1>{dataLogement [0].title}</h1>
						<p>{dataLogement [0].location}</p>
						<div>
							{dataLogement [0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
							{/*méthode map pour boucler tableau tags pour return bouton du tag */}
						</div>
					</div>
					<div className="logement-host">
						<div className="logement-host-infos">
							<div className="logement-host-name">
								<p>{name[0]}</p>
                {/* affiche premiére élément nom de l'hote */}
								<p>{name[1]}</p>
                {/* deuxiéme élément */}
							</div>
							<img className ="logement-host-photo" src={dataLogement [0].host.picture} alt="Photo de l'hôte de ce logement" />
              {/* Affiche l'image de l'hôte de l'hébergement avec propriété "picture" de l'objet "host"  */}
                        </div>
							
						<div className="logement-host-notation">
							{stars}
						</div>
					</div>
				</div>
				<div className="logement-collapse">
					<div className="logement-collapse-item">
						<Collapse title={'Description'} text={description} />	
						{/* (title, text) viens de l'import collapse */} 
					</div>
					<div className="logement-collapse-item" >
						<Collapse title={'Équipements'} text={<ul>{equipmentsList}</ul>} extraClass="description-collapse"> </Collapse>
					</div>
			    </div>
			</main>
		</>
	)
}

export default Logement;
