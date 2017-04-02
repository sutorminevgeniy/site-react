import React, { Component } from 'react';
import { Route, Router, Link, IndexLink } from 'react-router'

const portfolio = [
  {
    dataId: 'id-1',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min1.jpg'
    }
  },
  {
    dataId: 'id-2',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min2.jpg'
    }
  },
  {
    dataId: 'id-3',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min3.jpg'
    }
  },
  {
    dataId: 'id-4',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min4.jpg'
    }
  },
  {
    dataId: 'id-5',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min5.jpg'
    }
  },
  {
    dataId: 'id-6',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min6.jpg'
    }
  },
  {
    dataId: 'id-7',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min7.jpg'
    }
  },
  {
    dataId: 'id-8',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min8.jpg'
    }
  },
  {
    dataId: 'id-9',
    tag: 'Mark Sebastian',
    image: {
      src: './img/sample/portfolio-min9.jpg'
    }
  },
  {
    dataId: 'id-10',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min10.jpg'
    }
  },
  {
    dataId: 'id-11',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min11.jpg'
    }
  },
  {
    dataId: 'id-12',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min12.jpg'
    }
  },
  {
    dataId: 'id-13',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min13.jpg'
    }
  },
  {
    dataId: 'id-14',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min14.jpg'
    }
  },
  {
    dataId: 'id-15',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min15.jpg'
    }
  },
  {
    dataId: 'id-16',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min16.jpg'
    }
  },
  {
    dataId: 'id-17',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min17.jpg'
    }
  },
  {
    dataId: 'id-18',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min18.jpg'
    }
  },
  {
    dataId: 'id-19',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min19.jpg'
    }
  },
  {
    dataId: 'id-20',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min20.jpg'
    }
  },
  {
    dataId: 'id-21',
    tag: 'Other cars',
    image: {
      src: './img/sample/portfolio-min1.jpg'
    }
  },
  {
    dataId: 'id-22',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min2.jpg'
    }
  },
  {
    dataId: 'id-23',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min3.jpg'
    }
  },
  {
    dataId: 'id-24',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min4.jpg'
    }
  },
  {
    dataId: 'id-25',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min5.jpg'
    }
  },
  {
    dataId: 'id-26',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min6.jpg'
    }
  },
  {
    dataId: 'id-27',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min7.jpg'
    }
  },
  {
    dataId: 'id-28',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min8.jpg'
    }
  },
  {
    dataId: 'id-29',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min9.jpg'
    }
  },
  {
    dataId: 'id-30',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min10.jpg'
    }
  },
  {
    dataId: 'id-31',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min11.jpg'
    }
  },
  {
    dataId: 'id-32',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min12.jpg'
    }
  },
  {
    dataId: 'id-33',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min13.jpg'
    }
  },
  {
    dataId: 'id-34',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min14.jpg'
    }
  },
  {
    dataId: 'id-35',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min15.jpg'
    }
  },
  {
    dataId: 'id-36',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min16.jpg'
    }
  },
  {
    dataId: 'id-37',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min17.jpg'
    }
  },
  {
    dataId: 'id-38',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min18.jpg'
    }
  },
  {
    dataId: 'id-39',
    tag: 'Monty Python',
    image: {
      src: './img/sample/portfolio-min19.jpg'
    }
  },
  {
    dataId: 'id-40',
    tag: 'Ford Mustang',
    image: {
      src: './img/sample/portfolio-min20.jpg'
    }
  }
];


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      countProjects: 10,
      tag: 'All',
      portfolio: portfolio
    };
    this.state.portfolio = portfolio;

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.setProjectsByTag = this.setProjectsByTag.bind(this);
  }

  setProjectsByTag(e) {
    e.preventDefault();
    let result = {page: 1};

    result.tag = e.currentTarget.getAttribute('data-value'); 
this.setState(result);
    if(result.tag === 'All'){
      result.portfolio = portfolio;
    } else {
      result.portfolio = portfolio.filter(function(item) {
        return (item.tag === result.tag);
      });
    }

    this.setState(result);
  }

  getTags() {
    let result = {};
    let tags = [];
    result.All = portfolio.length;
    portfolio.map((item) => {
      if(item.tag in result) {
        result[item.tag]++;
      } else {
        result[item.tag] = 1;
      }
    });

    for(let key in result) {
      let className = (this.state.tag === key ? "segment selected" : "segment");
      tags.push(<li key={key} className={className}><a href="#" data-value={key} onClick={this.setProjectsByTag}><span>{result[key]}</span>{key}</a></li>);
    }

    return tags;
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
    let pageStart = (this.state.page - 1) * this.state.countProjects;
    let pageEnd = this.state.page * this.state.countProjects;
    let tags = this.getTags();
    console.log(this.state);

    return (
      <div id="contet-pages">
        <div id="text"><img src={require('./img/portfolio.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <ul className="portfolio-nav clearfix">
          { tags }
        </ul>
        
        <ul id="list" className="portfolio clearfix">
          { this.state.portfolio.slice(pageStart, pageEnd).map((item, key) => {
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
