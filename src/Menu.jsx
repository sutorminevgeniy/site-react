import React, { Component } from 'react';

class Menu extends Component {
  render() {
    let pathName = location.pathname;
    console.log(pathName);

    return (
      <ul id={this.props.menuId}>
        {this.props.menuItems.map((item, index) => {
          let classCurrent = (item.link == pathName ? 'current' : '');
          return (
            <li key={index} className={classCurrent}><a href={item.link}>{item.label}</a></li>
          );
        })}
      </ul>
    )
  }
}

export default Menu;