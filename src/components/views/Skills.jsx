import React, { Component } from 'react';

import imgload from '../../api/imgload';

class Stars extends Component {
  render() {
    let i;
    let imgSrc = [];
    
    for(i = 0; i < 6; i++){
      if(i < this.props.stars) {
        imgSrc.push(imgload('./star-active.png'))
      } else {
        imgSrc.push(imgload('./star-inactive.png'))
      }
    }

    return (
      <ul className="stars clearfix">
        {imgSrc.map((item, index) => {
          return (
            <li key={index}><img src={item} alt="" width="27" height="27" title="" /></li>
          );
        })}
      </ul>
    );
  }
}

class Skills extends Component {
  render() {
    return (
      <div className="section">

        <div className="clearfix"><h2>{this.props.data.title}</h2></div>
        
        {this.props.data.items.map((item, index) => {
          return (
            <div className="item" key={index}>
          
              <h3>{item.title}</h3>
              
              <Stars stars={item.stars} />
              
              <div className="description" dangerouslySetInnerHTML={{__html: item.description}}></div>
              
            </div>
          );
        })}

      </div>      
    );
  }
}

export default Skills