import React, { Component } from 'react';

import imgload from '../../api/imgload';

export default class Contact extends Component {
  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={imgload('./contact.png')} alt="" title="" /></div>
        <div id="stripe"></div>
      
        <ul id="contact-columns" className="clearfix">
        
          <li>
            <img src={imgload('./phone-icon.png')} alt="" title="" />
            <p>000 123 456 789</p>
          </li>
          
          <li>
            <img src={imgload('./mail-icon.png')} alt="" title="" />
            <p><a href="mailto:#">address@email.com</a></p>
          </li>
          
          <li className="address">
            <img src={imgload('./address-icon.png')} alt="" title="" />
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
              <div id="contact-loading"><img src={imgload('./loading.gif')} width="31" height="31" alt="loading" /></div>
                  
            </div>
                
              </form>
        </div>
      </div>
    );
  }
};
