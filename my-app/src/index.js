import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Pages/home';
import Apropos from './Pages/apropos';
import Logement from './Pages/logement';
import Error from './Pages/404';

ReactDOM.render(
  <React.StrictMode>
    {/* premier argument de la fonction */}
    <Router>
      <Header />
      <Routes>
        {/* routes remplace switch dans la nouvelle version de recat router */}
        <Route exact path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  // deuxiéme argument de la fonction : l'élément DOM cible
);
