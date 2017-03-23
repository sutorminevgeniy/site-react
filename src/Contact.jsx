import React, { Component } from 'react';

import './css/style.scss';

import Header from './Header';
import Footer from './Footer';
import Skills from './Skills';
import Experience from './Experience';
import PersonalDetails from './PersonalDetails';

const menuItems = [
  {
    link: "/",
    label: "Resume"
  },
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
];


class Contact extends Component {
  render() {
    return (
      <div id="page-shadow">
        <div id="page">
          <div className="content-innertube">
            <Header menuItems={menuItems} />
            
            <div id="text"><img src={require('./img/resume.png')} alt="" title="" /></div>
            <div id="stripe"></div>
          
            <ul id="contact-columns" className="clearfix">
            
              <li>
                <img src={require('./img/phone-icon.png')} alt="" title="" />
                <p>000 123 456 789</p>
              </li>
              
              <li>
                <img src={require('./img/mail-icon.png')} alt="" title="" />
                <p><a href="mailto:#">address@email.com</a></p>
              </li>
              
              <li className="address">
                <img src={require('./img/address-icon.png')} alt="" title="" />
                <p>
                  123 Street Address,
                  <br />
                  Lovely City,
                  <br />
                  My Country
                </p>
              </li>
            </ul>
            
            <div id="form-container" className="clearfix">
          
              <form id="contact-form" name="contact-form" method="post" action="submit.php">
                  
                <div id="content-left">
                    
                  <ul id="contact-message">
                    
                    <li>
                      <label htmlFor="message">Message:</label>
                      <textarea name="message" id="message" className="validate[required]" cols="35" rows="5"></textarea>
                    </li>
                      
                  </ul>
                      
                </div>
                
                    
                <div id="content-right">
                    
                  <ul id="contact-info">
                    
                    <li>
                      <label htmlFor="name">Name:</label>
                      <input type="text" className="validate[required,custom[onlyLetter]] " name="name" id="name" value="" />
                    </li>
              
                    <li>
                      <label htmlFor="email">Email:</label>
                      <input type="text" className="validate[required,custom[email]] text-input" name="email" id="email" value="" />
                    </li>
              
                    <li>
                      <label htmlFor="subject">Subject:</label>
                      <input type="text" className="validate[required] text-input" name="subject" id="subject" value="" />
                    </li>
                      
                    <li>
                      <label htmlFor="captcha">1 + 1 =</label>
                      <input type="text" className="validate[required,custom[onlyNumber]]" name="captcha" id="captcha" />
                    </li>
                      
                  </ul>
                      
                  <div id="submit-btn"><input type="submit" name="button" id="button" className="submit" value="Submit" /></div>
                  <div id="contact-loading"><img src={require('./img/loading.gif')} width="31" height="31" alt="loading" /></div>
                      
                </div>
                    
                  </form>
            </div>
          </div>
          
          <div className="clear"></div>
          
          <Footer menuItems={menuItems} />
        </div>
      </div>
    );
  }
}

export default Contact;
