import React, { Component } from 'react';

import Menu from './Menu';

class ButtonTop extends Component {
  constructor(props) {
    super(props);

    this.goTop = this.goTop.bind(this);
  }

  goTop() {
    document.body.scrollTop = 0;
  }

  render() {
    return <div id="go-top" onClick={this.goTop}></div>;
  }
}

class Footer extends Component {
  render() {
    return (
      <div id="footer">
      
        <div id="footer-innertube">
        
          <div id="footer-address">
            <h5>Address</h5>
            <ul>
              <li>123 Street Address,</li>
              <li>Lovely City,</li>
              <li>My Country</li>
            </ul>
          </div>
          
          <div id="footer-contact">
            <h5>Contact</h5>
            <ul>
              <li>000 123 456 789</li>
              <li><a href="mailto:#" title="Send me an email">address@email.com</a></li>
              <li><a href="contact.php">Contact form<span className="raquo">&#187;</span></a></li>
            </ul>
          </div>
          
          <div id="footer-social">
            <h5>Social</h5>
            <ul>
              <li><a href="#" title=""><img src={require('../img/twitter.png')} alt="twitter" title="My Twitter profile" /></a></li>
              <li><a href="#" title=""><img src={require('../img/facebook.png')} alt="facebook" title="My Facebook profile" /></a></li>
              <li><a href="#" title=""><img src={require('../img/flickr.png')} alt="flickr" title="My Flickr profile" /></a></li>
              <li><a href="#" title=""><img src={require('../img/linkedin.png')} alt="linkedin" title="My Linkedin profile" /></a></li>
            </ul>
          </div>
          
          <div id="footer-resume">
            <h5>My resume</h5>
            <div id="download-resume"><a href="#"></a></div>
          </div>
          
          <div className="clear"></div>
          
          <Menu menuId="footer-nav" menuItems={this.props.menuItems} />
          
          <ButtonTop />
          
          <div className="clear"></div>
        
        </div>
      </div>
    );
  }
}

export default Footer;