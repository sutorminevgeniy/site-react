import React, { Component } from 'react';
import { connect } from 'react-redux';

import imgload from '../../api/imgload';
import store from '../../store';

class Lightbox extends Component {
  render() {
    return (
      <div className="light_box">
        <div className="pp_pic_holder light_square" style={{width: "540px"}}>
          <div className="ppt" style={{opacity: 1, display: "block", width: "500px"}}>&nbsp;</div>
          <div className="pp_top">
            <div className="pp_left"></div>
            <div className="pp_middle"></div>
            <div className="pp_right"></div>
          </div>
          <div className="pp_content_container">
            <div className="pp_left">
              <div className="pp_right">
                <div className="pp_content" style={{height: "338px", width: "500px"}}>
                  <div className="pp_loaderIcon" style={{display: "none"}}></div>
                  <div className="pp_fade" style={{display: "block"}}>
                    <a href="#" className="pp_expand" title="Expand the image" style={{display: "none"}}>Expand</a>
                    <div className="pp_hoverContainer" style={{height: "300px", width: "500px"}}>
                      <a className="pp_next" href="#">next</a>
                      <a className="pp_previous" href="#">previous</a>
                    </div>
                    <div id="pp_full_res">
                      <img id="fullResImage" src={imgload('./sample/portfolio-big1.jpg')} style={{height: "300px", width: "500px"}} />
                    </div>
                    <div className="pp_gallery" style={{marginLeft: "-142.5px", display: "none"}}>
                      <a href="#" className="pp_arrow_previous" style={{display: "none"}}>Previous</a>
                      <div style={{width: "290px"}}>
                        <ul style={{width: "285px", left: "0px"}}>
                          <li className="selected"><a href="#"><img src={imgload('./sample/portfolio-big1.jpg')} width="50" alt="" /></a></li>
                          <li className=""><a href="#"><img src={imgload('./sample/portfolio-big2.jpg')} width="50" alt="" /></a></li>
                          <li className=""><a href="#"><img src={imgload('./sample/portfolio-big3.jpg')} width="50" alt="" /></a></li>
                          <li className=""><a href="#"><img src={imgload('./sample/portfolio-big4.jpg')} width="50" alt="" /></a></li>
                          <li className=""><a href="#"><img src={imgload('./sample/portfolio-big12.jpg')} width="50" alt="" /></a></li>
                        </ul>
                      </div>
                      <a href="#" className="pp_arrow_next" style={{display: "none"}}>Next</a>
                    </div>
                    <div className="pp_details" style={{width: "500px"}}>
                      <div className="pp_nav">
                        <a href="#" className="pp_arrow_previous">Previous</a>
                        <p className="currentTextHolder">1/5</p>
                        <a href="#" className="pp_arrow_next">Next</a>
                      </div>
                      <a className="pp_close" href="#">Close</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pp_bottom">
            <div className="pp_left"></div>
            <div className="pp_middle"></div>
            <div className="pp_right"></div>
          </div>
        </div>
        <div className="pp_overlay" style={{opacity: 0.8, height: "1292px", width: "1300px", display: "block"}}></div>
      </div>
    );
  }
};

class Project extends Component {
  componentDidMount() {
    store.dispatch({
      type: 'GET_PROJECT_BY_ID',
      id: this.props.params.id
    });
  }

  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={imgload('./project.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <h2>{this.props.projectState.tag} {this.props.projectState.id}</h2>
        
        <ul id="project-nav">
          <li className="online"><a href="#"></a></li>
          <li className="portfolio"><a href="portfolio.html"></a></li>
        </ul>
        
        <div className="clear"></div>
        
        <ul id="project-gall" className="clearfix">
          <li>
            <a href={imgload('./sample/portfolio-big1.jpg')} rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={imgload('./sample/portfolio-min1.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          </li>
          <li>
            <a href={imgload('./sample/portfolio-big2.jpg')} rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={imgload('./sample/portfolio-min2.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          </li>
          <li>
            <a href={imgload('./sample/portfolio-big3.jpg')} rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={imgload('./sample/portfolio-min3.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          </li>
          <li>
            <a href={imgload('./sample/portfolio-big4.jpg')} rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={imgload('./sample/portfolio-min4.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          </li>
          <li>
            <a href={imgload('./sample/portfolio-big12.jpg')} rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={imgload('./sample/portfolio-min12.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          </li>
        </ul>
        
        <p className="project-desc">In gravida ultricies urna, vitae malesuada nulla porttitor ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis felis non diam mattis vel malesuada massa rhoncus. Cras ullamcorper ligula sed tortor consectetur faucibus. Nullam cursus tempor tincidunt. Suspendisse scelerisque malesuada sapien quis consequat. Cras nunc tortor, volutpat ut sollicitudin a, placerat vel arcu. Proin facilisis dui sapien. Duis congue pharetra ligula at euismod. Nam sem purus, ultrices non convallis eget, vulputate ac urna. </p>
        
        <div id="project-lists" className="clearfix">
        
          <div id="content-left">
          
            <div className="clearfix"><h2>Aenean egestas</h2></div>
          
            <ul id="arrow">
              <li>Vivamus tempor urna in eros dapibus luctus.</li>
              <li>Maecenas vel justo vel sem rutrum pretium eu at risus.</li>
              <li>Proin egestas neque at dui dapibus ac pellentesque ipsum condimentum.</li>
              <li>Aliquam placerat elit at est lobortis congue.</li>
              <li className="last">Maecenas id tortor id dui convallis ultricies sit amet a erat.</li>
            </ul>
          </div>
          
          <div id="content-right">
          
            <div className="clearfix"><h2>Suspendisse venenatis</h2></div>
          
            <ul id="check">
              <li>Aliquam in elit non elit condimentum pellentesque ut id velit.</li>
              <li>Ut hendrerit nulla vitae est porta sed sagittis ligula interdum.</li>
              <li>Nullam non sem nisi, non blandit nulla.</li>
              <li>Integer at mauris in leo imperdiet varius.</li>
              <li className="last">Duis tincidunt leo eget mauris feugiat convallis.</li>
            </ul>
          </div>
        </div>

        <Lightbox />
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    projectState: store.projectState
  };
};

export default connect(mapStateToProps)(Project);