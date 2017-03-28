import React, { Component } from 'react';
import { Route, Router, Link, IndexLink } from 'react-router'

export default class Menu extends Component {
  render() {
    return (
      <ul id={this.props.menuId}>
        <li><IndexLink to={this.props.menuItems.main.link} activeClassName="current">{this.props.menuItems.main.label}</IndexLink></li>
        {this.props.menuItems.pages.map((item, index) => {
          return (
            <li key={index}><Link to={item.link} activeClassName="current">{item.label}</Link></li>
          );
        })}
      </ul>
    )
  }
};