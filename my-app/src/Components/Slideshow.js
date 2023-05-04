import React, { useState } from "react";
import ArrowRight from "../Styles/Assets/Arrow-right.png";
import ArrowLeft from "../Styles/Assets/Arrow-left.png";
import "../Styles/Slideshow.css";

function Slideshow({ imageSlideshow }) {
  // argument imageSlideshow(tableau d'images)
  const [currentIndex, setCurrentIndex] = useState(0);
  // State = état local appelé currentIndex avec fonction useState qui définir valeur initiale à 0 (tableau vide)
  // setCurrentIndex= fonction qui permet de mettre à jour l'état

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    //Comportement =  incrémente currentIndex de 1 à chaque appel
    if (currentIndex === imageSlideshow.length - 1) setCurrentIndex(0);
  };
  // si currentIndex = dernière image du tableau imageSlideshow, setCurrentIndex(0) réinitialise  currentIndex à 0
  // ==> pour passer à l'image suivante

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlideshow.length - 1);
    // si currentIndex = 0, on est sur la premiére image du tableau, on renvoi donc sur la derniére image du tableau
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlideshow[currentIndex]})` }}
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
            {currentIndex + 1} / {imageSlideshow.length}
            {/* on rajoute +1 car un tableau commence par 0 */}
          </p>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
