import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Partners from "./Views/Partners/Partners";
import Contact from "./Views/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
