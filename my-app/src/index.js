import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import App from "./Pages/Home/index";
import Apropos from "./Pages/A propos";
import Logement from "./Pages/Logement";
import Error from "./Pages/404";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* routes remplace switch dans la nouvelle version de recat router */}
        <Route exact path="/" element={<App />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
