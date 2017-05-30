import React, { Component } from 'react';

import imgload from '../../api/imgload';

import Skills from '../views/Skills';
import Experience from '../views/Experience';
import PersonalDetails from '../views/PersonalDetails';

const resume = require('../../db/resume.json');

export default class Resume extends Component {
  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={imgload('./resume.png')} alt="" title="" /></div>
        <div id="stripe"></div>
      
        <div id="content-left">
          <PersonalDetails data={resume.personalDetails}/> 
          <Experience data={resume.workExperience} />
        </div>
        
        <div id="content-right">
          <Skills data={resume.skills} />
          <Experience data={resume.education} />
        </div>
      </div>
    );
  }
};