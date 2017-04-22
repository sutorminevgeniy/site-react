import React, { Component } from 'react';

import Header from '../views/Header';
import Footer from '../views/Footer';

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
      link: "/about",
      label: "About me"
    },
    {
      link: "/contact",
      label: "Contact"
    }
  ]
};

class Main extends Component{
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

export default Main