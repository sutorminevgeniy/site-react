import React, { Component } from 'react';

import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div id="header">
      
        <h1>John William Doe</h1>
        
        <div id="main-nav-bg">
          <Menu menuId="main-nav" menuItems={this.props.menuItems} />

          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default Header;