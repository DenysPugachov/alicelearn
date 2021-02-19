import React from "react";
import Header from "../header/header";
import "./bootstrap.min.css";
import "./style.css";
import { Sub, Add, Mul, Dev } from "../expressions";
import Timer from "../timer/timer";
import { BrowserRouter, Route } from "react-router-dom";
import startPage from "./startPage";


const appVersion = "v1.051";


const App = () => {

  return (
    <div className="container" >
      <div className="version">{ appVersion }</div>

      <BrowserRouter>

        <Header />

        <hr />

        <Timer />

        <section className="expression-container">
          <Route path="/" exact component={ startPage } />
          <Route path="/sub" exact component={ Sub } />
          <Route path="/add" exact component={ Add } />
          <Route path="/mul" exact component={ Mul } />
          <Route path="/dev" exact component={ Dev } />
        </section>

      </BrowserRouter>

    </div>
  );
};


export default App;