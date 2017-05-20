import React, { Component } from 'react';
import { connect } from 'react-redux';

import imgload from '../../api/imgload';
import store from '../../store';

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.hideLightbox = this.hideLightbox.bind(this);
  }

  hideLightbox(e) {
    e.preventDefault();

    store.dispatch({
      type: 'HIDE_LIGHTBOX'
    })
  }
  render() {
    let displayLigxtbox = (this.props.projectState.lightbox.showState ? "block" : "none");

    return (
      <div className="light_box" style={{display: displayLigxtbox}}>
        <div className="pp_pic_holder light_square" style={{height: "340px", width: "500px"}}>
          <div className="pp_content">
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
                    { this.props.projectState.photos.map((item, index) => {
                      return (
                        <li className={ index === this.props.projectState.lightbox.currentSlide ? 'selected' : '' } key={index}><a href="#"><img src={imgload(item.srcbig)} width="50" alt="" /></a></li>
                      );
                    }) }
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
                <a className="pp_close" href="#" onClick={this.hideLightbox}>Close</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pp_overlay"></div>
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    projectState: store.projectState
  };
};

export default connect(mapStateToProps)(Lightbox);