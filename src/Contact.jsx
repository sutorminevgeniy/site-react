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
const skills = {
  title: "Technical Skills",
  items: [
    {
      title: "Adobe Photoshop",
      stars: 6,
      description: "<p>Nullam felis ligula, sodales accumsan vehicula sit amet, faucibus eget augue. Cras scelerisque mi vitae mi commodo id tincidunt elit varius.</p>"
    },
    {
      title: "Microsoft Windows",
      stars: 5,
      description: "<p>Mauris vitae sapien non lacus sodales ornare. Integer at augue lacus, non tincidunt sapien. Pellentesque vulputate rhoncus pellentesque.</p>"
    },
    {
      title: "Microsoft Office",
      stars: 4,
      description: "<p>Maecenas sollicitudin tincidunt tortor a tincidunt. Pellentesque convallis accumsan sapien. Maecenas laoreet posuere dui ut cursus. Vivamus condimentum diam vitae purus bibendum eget fermentum felis iaculis.</p>"
    }
  ]
};
const workExperience = {
  "title": "Work Experience",
  "items": [
    {
      "title": "Freelance designing",
      "title2": "My own business",
      "date": "2008 - present",
      "description": "<p>Duis elit est, sollicitudin non consequat posuere, euismod ac tellus. Curabitur ut nulla lectus. In sodales aliquam dolor vitae lacinia. Nunc gravida molestie imperdiet.</p><ul><li>Duis id neque odio, vitae tempus leo.</li> <li>Vivamus ultrices augue viverra massa scelerisque in facilisis arcu blandit.</li><li>Quisque at quam ut sem viverra ultricies.</li></ul>"
    },
    {
      "title": "Fashion designer",
      "title2": "Fashion and Style Company",
      "date": "2007 - 2008",
      "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus dui, bibendum ac aliquet non, volutpat quis elit.</p><ul><li>Curabitur condimentum elementum purus, ut dapibus nunc pulvinar id.</li><li>Fusce id neque dictum felis pharetra elementum in id erat.</li></ul>",
      "titleRef": "References",
      "textRef": "<p>Mr. Jet Lee <br />Main designer<br />000 123 456 789</p>"
    }
  ]
};
const education = {
  "title": "Education",
  "items": [
    {
      "title": "Copywriting",
      "title2": "Lorem Ipsum University",
      "date": "2004 - 2007",
      "description": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
    },
    {
      "title": "High School",
      "date": "2000 - 2004",
      "description": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
    }
  ]
};
const personalDetails = {
  "title": "Personal details",
  "items": [
    {
      "title": "Name",
      "text": "John William Doe"
    },
    {
      "title": "Born on",
      "text": "July 27, 1989"
    },
    {
      "title": "Address",
      "text": "<ul id=\"address-lines\"><li>123 Street Address,</li><li>Lovely City,</li><li>My Country</li></ul>"
    },
    {
      "title": "Phone",
      "text": "0 123 456 789"
    },
    {
      "title": "Email",
      "text": "<a href=\"mailto:#\">address@email.com</a>"
    }
  ]
};

class Contact extends Component {
  render() {
    return (
      <div id="page-shadow">
        <div id="page">
          <div className="content-innertube">
            <Header menuItems={menuItems} />
            
            <div id="text"><img src="img/resume.png" alt="" title="" /></div>
            <div id="stripe"></div>
          
            <ul id="contact-columns" className="clearfix">
            
              <li>
                <img src="img/phone-icon.png" alt="" title="" />
                <p>000 123 456 789</p>
              </li>
              
              <li>
                <img src="img/mail-icon.png" alt="" title="" />
                <p><a href="mailto:#">address@email.com</a></p>
              </li>
              
              <li className="address">
                <img src="img/address-icon.png" alt="" title="" />
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
                  <div id="contact-loading"><img src="contact-form/img/loading.gif" width="31" height="31" alt="loading" /></div>
                      
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
