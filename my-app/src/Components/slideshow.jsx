import React, { useState } from "react";
import ArrowRight from "../Styles/Assets/Arrow-right.png";
import ArrowLeft from "../Styles/Assets/Arrow-left.png";
import "../Styles/slideshow.css";

function Slideshow({ imageSlideshow }) {
  // argument imageSlideshow(tableau d'images)
  const [actuelIndex, setActuelIndex] = useState(0);
  // State = état local appelé actuelIndex avec fonction useState qui définir valeur initiale à 0 (tableau vide)
  // setActuelIndex= fonction qui permet de mettre à jour l'état

  const nextSlide = () => {
    setActuelIndex(actuelIndex + 1);
    //Comportement =  incrémente actuelIndex de 1 à chaque appel
    if (actuelIndex === imageSlideshow.length - 1) setActuelIndex(0);
  };
  // si actuelIndex = dernière image du tableau imageSlideshow, setActuelIndex(0) réinitialise  actuelIndex à 0
  // ==> pour passer à l'image suivante

  const prevSlide = () => {
    setActuelIndex(actuelIndex - 1);
    if (actuelIndex === 0) setActuelIndex(imageSlideshow.length - 1);
    // si actuelIndex = 0, on est sur la premiére image du tableau, on renvoi donc sur la derniére image du tableau
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlideshow[actuelIndex]})` }}
      className="carousel"
    >
      {imageSlideshow.length > 1 && (
        // seulement si la longueur du tableau est supérieur à 1, càd à plus d'une photo, on affihe compteur et fléches
        <div>
          <img
            className="slide-arrow arrow-right"
            src={ArrowRight}
            alt="Aller à l'image suivante"
            onClick={nextSlide}
          />
          <img
            className="slide-arrow arrow-left"
            src={ArrowLeft}
            alt="Aller à l'image précédente"
            onClick={prevSlide}
          />
          <p className="slideCounter">
            {actuelIndex + 1} / {imageSlideshow.length}
            {/* on rajoute +1 car un tableau commence par 0 */}
          </p>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
