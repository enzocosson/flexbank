import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';
import Partners from '../../Views/Partners';
import Contact from '../../Views/Contact';
import './Header.module.scss';

function Header() {
  return (
    <header>
      <h1>Mon application React</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/partners" component={Partners} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </header>
  );
}

export default Header;
