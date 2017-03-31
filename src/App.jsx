import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import './css/style.scss';

import Resume from './Resume';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import Contact from './Contact';

import Header from './components/Header';
import Footer from './components/Footer';

const menuItems = {
  main: {
    link: "/",
    label: "Resume"
  },
  pages: [
    {
      link: "/portfolio",
      label: "Portfolio"
    },
    {
      link: "/project",
      label: "Project"
    },
    {
      link: "/about",
      label: "About me"
    },
    {
      link: "/contact",
      label: "Contact"
    }
  ]
};

class NotFound extends Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}

class Main extends React.Component{
  render(){
    return (
      <div id="page-shadow">
        <div id="page">
          <div className="content-innertube">
            <Header menuItems={menuItems} />
            {this.props.children}         
          </div>
          <div className="clear"></div>
          <Footer menuItems={menuItems} />
        </div>
      </div>
    );
  }
}

class PortfolioMain extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}         
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Resume} />
      <Route path="portfolio" component={PortfolioMain}>
        <IndexRoute component={Portfolio} />
        <Route path=":name" component={Project} />
      </Route>
      <Route path="project" component={Project} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById("root")
)