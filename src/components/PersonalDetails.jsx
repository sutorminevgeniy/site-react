import React, { Component } from 'react';

class PersonalDetails extends Component {
  render() {
    return (
      <div className="section">
        <div className="clearfix"><h2>{this.props.data.title}</h2></div>
        
        <div className="item">
          
          <ul id="personal-details">
            {this.props.data.items.map((item, index) => {
              return (
                <li key={index}>
                  <strong>{item.title}:</strong><span dangerouslySetInnerHTML={{__html: item.text}}></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;