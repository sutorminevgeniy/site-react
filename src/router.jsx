import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router'

import './css/style.scss';

import Main from './components/layouts/Main';

import Resume from './components/containers/Resume';
import Portfolio from './components/containers/Portfolio';
import Project from './components/containers/Project';
import About from './components/containers/About';
import Contact from './components/containers/Contact';


class NotFound extends Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      <IndexRoute component={Resume} />

      <Route path="portfolio">
        <IndexRoute component={Portfolio} />
        <Route path=":id" component={Project} />
      </Route>

      <Route path="about" component={About} />

      <Route path="contact" component={Contact} />
      
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);