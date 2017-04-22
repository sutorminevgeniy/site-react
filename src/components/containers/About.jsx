import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={require('../../img/aboutme.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <div id="about" className="clearfix">
          <img src={require('../../img/sample/photo.jpg')} alt="" title="" />
          <h2>A few words about me</h2>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisl elit, id fermentum ipsum. Nullam nibh sem, facilisis cursus malesuada non, condimentum sed mauris. Aenean consequat, nunc eget molestie convallis, neque est rhoncus ligula, volutpat varius purus nisl non diam. Phasellus enim arcu, pretium sed tincidunt tempor, consequat a lorem. Vestibulum ligula nulla, blandit a ullamcorper in, scelerisque ullamcorper justo.</p>
          
          <blockquote className="about-me">
            <div className="quote-top"></div>
            &#8220;Vestibulum leo dolor, tristique vel consectetur ultrices, dapibus ut odio. Integer eget pulvinar lorem. Phasellus blandit libero eget ante vulputate a convallis sapien vestibulum. Proin at leo lacus, a semper. &#8220;
            <p className="quote-author">Joe Doe, <a href="#" title="">Web Design Studio</a></p>
          </blockquote>
        </div>
            
        <div id="about-middle" className="clearfix">
          <div id="content-left">
            <div className="clearfix"><h2>My skills</h2></div>
            <ul id="chart">
              <li className="five">Photoshop</li>
              <li className="four">Windows</li>
              <li className=" three">Office</li>
              <li className="five">HTML5</li>
              <li className="four">JavaScript</li>
            </ul>
            <div id="axis"></div>
          </div>
            
          <div id="content-right">
            <div className="clearfix"><h2>What can I do</h2></div>
              <ul id="check">
                <li>Nam vel diam at ligula pharetra imperdiet at eget magna.</li>
                <li>Curabitur ac erat quis nisl lobortis mattis a vitae ligula.</li>
                <li>Morbi et diam magna, at tincidunt tortor.</li>
                <li>Morbi auctor dignissim lacus, quis ullamcorper metus sodales id.</li>
                <li>Maecenas elementum nibh id sapien sodales non placerat risus interdum.</li>
                <li className="last">Donec luctus mollis elit, eget vulputate felis lacinia quis.</li>
              </ul>
          </div>
        </div>
          
        <div id="twitter" className="clearfix">
         <div id="twitter-btn"><a href="#"></a></div>
          <div id="last-tweets">
            <div className="tweet"></div> 
          </div>
        </div>
      </div>
    );
  }
};

export default About 