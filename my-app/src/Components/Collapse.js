import React, { useState } from "react";
import "../Styles/Collapse.css";
import arrow from "../Styles/Assets/Arrow.png";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <h2 className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          className={isOpen ? "arrow arrow-down" : "arrow arrow-up"}
          src={arrow}
          alt="Fléche pour déplier contenu"
        />
      </h2>
      {isOpen && <p className="collapse-text">{text}</p>}
    </div>
  );
}

export default Collapse;
