import React, { Component } from 'react';

import Skills from './components/Skills';
import Experience from './components/Experience';
import PersonalDetails from './components/PersonalDetails';

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

export default class Resume extends Component {
  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={require('./img/resume.png')} alt="" title="" /></div>
        <div id="stripe"></div>
      
        <div id="content-left">
          <PersonalDetails data={personalDetails}/> 
          <Experience data={workExperience} />
        </div>
        
        <div id="content-right">
          <Skills data={skills} />
          <Experience data={education} />
        </div>
      </div>
    );
  }
};