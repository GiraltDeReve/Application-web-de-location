import React, { useState } from "react";
import "../Styles/collapse.css";
import arrow from "../Styles/Assets/Arrow.png";

function Collapse({ title, text }) {
  // argument = propriétés tittle et text
  const [isOpen, setIsOpen] = useState(false);
  // fonction "useState" pour déclarer variable d'état(isOpen) + on initialise sa valeur à false

  return (
    <div className="collapse">
      <h2 className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        {/* au click on change la valeur de isOpen a son inverse donc true si état false par defaut ou false si état à été changé pour true */}
        {title}
        <img
          className={isOpen ? "arrow arrow-down" : "arrow arrow-up"}
          // condition : si isOpen is true, le style aarow down est appliqué sinon arrow up
          src={arrow}
          alt="Fléche pour déplier ou refermer contenu"
        />
      </h2>
      {isOpen && <p className="collapse-text">{text}</p>}
      {/* verif isOpen = true et style affecté au texte  */}
    </div>
  );
}

export default Collapse;
