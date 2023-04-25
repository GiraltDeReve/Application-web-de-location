import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Pages/Home/index";
import Apropos from "./Pages/Apropos";
import reportWebVitals from "./reportWebVitals";

// proposition chat GPT
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={Apropos} />
      </Switch>
    </Router>
  );
}

// code suivant cours
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Route exact path="/">
//         <App />
//       </Route>
//       <Route exact path="/">
//         <Apropos />
//       </Route>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// Code d'avant routage
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
