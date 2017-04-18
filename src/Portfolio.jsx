import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Link, IndexLink } from 'react-router';
import store from './store';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      countProjects: 10,
      tag: 'All',
      portfolio: props.portfolioState.portfolio
    };

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
    let newPage = this.state.page;
    if(this.state.page < Math.floor(this.state.portfolio.length / this.state.countProjects)){
      newPage++;
    } else {
      newPage = 1;
    }
    this.setState({page: newPage});
  }

  prevPage(e) {
    e.preventDefault();
    let newPage = this.state.page;
    if(this.state.page > 1){
      newPage--;
    } else {
      newPage = Math.floor(this.state.portfolio.length / this.state.countProjects);
    }
    this.setState({page: newPage});
  }

  render() {
    return (
      <div id="contet-pages">
        <div id="text"><img src={require('./img/portfolio.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <ul className="portfolio-nav clearfix">
          { this.getTags() }
        </ul>
        
        <ul id="list" className="portfolio clearfix">
          { this.props.portfolioState.portfolio.map((item, key) => {
            return (
              <li key={key} data-id={item.dataId} className="ford">
                <Link to={`/portfolio/${item.dataId}`} rel="prettyPhoto[mixed]" title={item.dataId}>
                  <img title="" alt="" src={require('' + item.image.src)} />
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