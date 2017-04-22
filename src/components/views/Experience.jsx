import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="section experience">
          
        <div className="clearfix"><h2>{this.props.data.title}</h2></div>
        
        {this.props.data.items.map((item, index) => {
          return (
            <div className="item" key={index}>
        
              <h3>{item.title}</h3>
              {'title2' in item ? <h4>{item.title2}</h4> : ''}
              <div className="date">{item.date}</div>
              
              <div className="description" dangerouslySetInnerHTML={{__html: item.description}}></div>
              
              {'titleRef' in item ? <h4 className="refer">{item.titleRef}</h4> : ''}
              {'textRef' in item ? <div dangerouslySetInnerHTML={{__html: item.textRef}}></div> : ''}
        
            </div>
          );
        })}
        
      </div>
    );
  }
}

export default Experience