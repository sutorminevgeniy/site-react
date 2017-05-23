import React, { Component } from 'react';
import { connect } from 'react-redux';

import imgload from '../../api/imgload';
import store from '../../store';

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.lengthLightbox = this.props.projectState.photos.length;

    this.stepCarusel = 5;
    this.currentCarusel = Math.ceil((this.props.projectState.lightbox.currentSlide + 1) / this.stepCarusel) - 1;
    this.countCarusel = Math.ceil(this.lengthLightbox / this.stepCarusel);
    this.stepPosition = 285;

    this.hideLightbox   = this.hideLightbox.bind(this);
    this.nextLightbox   = this.nextLightbox.bind(this);
    this.prevLightbox   = this.prevLightbox.bind(this);
    this.showLightbox   = this.showLightbox.bind(this);
    this.nextCarusel   = this.nextCarusel.bind(this);
    this.prevCarusel   = this.prevCarusel.bind(this);
  }

  hideLightbox(e) {
    e.preventDefault();

    store.dispatch({
      type: 'HIDE_LIGHTBOX'
    });
  }

  nextLightbox(e) {
    e.preventDefault();

    store.dispatch({
      type: 'NEXT_LIGHTBOX'
    });
  }

  prevLightbox(e) {
    e.preventDefault();

    store.dispatch({
      type: 'PREV_LIGHTBOX'
    });
  }

  showLightbox(e) {
    e.preventDefault();

    let currentSlide = Number(e.currentTarget.getAttribute('data-current'));

    store.dispatch({
      type: 'SHOW_LIGHTBOX',
      currentSlide: currentSlide
    });
  }

  nextCarusel(e) {
    e.preventDefault();

    if(this.currentCarusel === (this.countCarusel - 1)) {
      this.currentCarusel = 0;
    } else {
      this.currentCarusel++;
    }

    this.refs.caruselBlock.style.left = -1 * this.currentCarusel * this.stepPosition + "px";
  }

  prevCarusel(e) {
    e.preventDefault();

    if(this.currentCarusel === 0) {
      this.currentCarusel = this.countCarusel - 1;
    } else {
      this.currentCarusel--;
    }

    this.refs.caruselBlock.style.left = -1 * this.currentCarusel * this.stepPosition + "px";
  }

  render() {
    let displayLigxtbox = (this.props.projectState.lightbox.showState ? "block" : "none");
    this.currentCarusel = Math.ceil((this.props.projectState.lightbox.currentSlide + 1) / this.stepCarusel) - 1;

    return (
      <div className="light_box" style={{display: displayLigxtbox}}>
        <div className="pp_pic_holder light_square" style={{height: "340px", width: "500px"}}>
          <div className="pp_content">
            <div className="pp_loaderIcon" style={{display: "none"}}></div>
            <div className="pp_fade" style={{display: "block"}}>
              <a href="#" className="pp_expand" title="Expand the image" style={{display: "none"}}>Expand</a>

              <div className="pp_hoverContainer" style={{height: "300px", width: "500px"}}>
                <a className="pp_next" href="#" onClick={this.nextLightbox}>next</a>
                <a className="pp_previous" href="#" onClick={this.prevLightbox}>previous</a>
              </div>

              <div id="pp_full_res">
                <img id="fullResImage" src={imgload(this.props.projectState.photos[this.props.projectState.lightbox.currentSlide].srcbig)} style={{height: "300px", width: "500px"}} />
              </div>

              <div className="pp_gallery" style={{marginLeft: "-142.5px"}}>
                <a href="#" className="pp_arrow_previous" style={{display: (this.countCarusel > 0 ? "block" : "none")}} onClick={this.prevCarusel}>Previous</a>
                <div>
                  <ul style={{width: (this.countCarusel * this.stepPosition + "px"), left: (-1 * this.currentCarusel * this.stepPosition + "px")}} ref="caruselBlock">
                    { this.props.projectState.photos.map((item, index) => {
                      return (
                        <li className={ index === this.props.projectState.lightbox.currentSlide ? 'selected' : '' } key={index}>
                          <a href="#" data-current={index} onClick={this.showLightbox}><img src={imgload(item.srcbig)} width="50" alt="" /></a>
                        </li>
                      );
                    }) }
                  </ul>
                </div>
                <a href="#" className="pp_arrow_next" style={{display: (this.countCarusel > 0 ? "block" : "none")}} onClick={this.nextCarusel}>Next</a>
              </div>

              <div className="pp_details" style={{width: "500px"}}>
                <div className="pp_nav">
                  <a href="#" className="pp_arrow_previous" onClick={this.prevLightbox}>Previous</a>
                  <p className="currentTextHolder">{this.props.projectState.lightbox.currentSlide + 1}/{this.lengthLightbox}</p>
                  <a href="#" className="pp_arrow_next" onClick={this.nextLightbox}>Next</a>
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