import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Link, IndexLink } from 'react-router';
import store from '../../store';


class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.getProjectsByTag = this.getProjectsByTag.bind(this);
  }

  getTags() {
    let tagsTempl = [];

    for(let key in this.props.portfolioState.tags) {
      let className = (this.props.portfolioState.tag === key ? "segment selected" : "segment");
      tagsTempl.push(<li key={key} className={className}><a href="#" data-value={key} onClick={this.getProjectsByTag}><span>{this.props.portfolioState.tags[key]}</span>{key}</a></li>);
    }

    return tagsTempl;
  }

  getProjectsByTag(e) {
    e.preventDefault();
    let tag = e.currentTarget.getAttribute('data-value');

    store.dispatch({
      type: 'GET_PROJECTS_BY_TAG',
      tag: tag
    });
  }

  nextPage(e) {
    e.preventDefault();

    store.dispatch({
      type: 'NEXT_PAGE'
    });
  }

  prevPage(e) {
    e.preventDefault();
    
    store.dispatch({
      type: 'PREV_PAGE'
    });
  }

  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={require('../../img/portfolio.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <ul className="portfolio-nav clearfix">
          { this.getTags() }
        </ul>
        
        <ul id="list" className="portfolio clearfix">
          { this.props.portfolioState.portfolio.map((item, key) => {
            let srcImg = `../.${item.image.src}`;
            srcImg = require('../../img/sample/portfolio-min1.jpg');
            return (
              <li key={key} data-id={item.dataId} className="ford">
                <Link to={`/portfolio/${item.dataId}`} rel="prettyPhoto[mixed]" title={item.dataId}>
                  <img title="" alt="" src={srcImg} />
                  <span className="portfolio-overlay"><br />{item.dataId}<br />{item.tag}</span>
                </Link>
              </li>
             );
          }) }   
        </ul>
        
        <ul id="prev-next" className="clearfix">
          <li className="next"><a href="#" onClick={this.nextPage}></a></li>
          <li className="prev"><a href="#" onClick={this.prevPage}></a></li>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  return {
    portfolioState: store.portfolioState
  };
};

export default connect(mapStateToProps)(Portfolio);