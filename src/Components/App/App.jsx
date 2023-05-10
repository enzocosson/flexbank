import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Views/Home/Home";
import Partners from "../../Views/Partners/Partners";
import Contact from "../../Views/Contact/Contact";
import Login from "../../Views/Login/Login";
import Signup from "../../Views/Signup/Signup";
import "./App.module.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
