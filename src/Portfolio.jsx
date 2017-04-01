import React, { Component } from 'react';
import { Route, Router, Link, IndexLink } from 'react-router'

const portfolio = [
  {
    dataId: 'id-1',
    image: {
      src: './img/sample/portfolio-min1.jpg'
    }
  },
  {
    dataId: 'id-2',
    image: {
      src: './img/sample/portfolio-min2.jpg'
    }
  },
  {
    dataId: 'id-3',
    image: {
      src: './img/sample/portfolio-min3.jpg'
    }
  },
  {
    dataId: 'id-4',
    image: {
      src: './img/sample/portfolio-min4.jpg'
    }
  },
  {
    dataId: 'id-5',
    image: {
      src: './img/sample/portfolio-min5.jpg'
    }
  },
  {
    dataId: 'id-6',
    image: {
      src: './img/sample/portfolio-min6.jpg'
    }
  },
  {
    dataId: 'id-7',
    image: {
      src: './img/sample/portfolio-min7.jpg'
    }
  },
  {
    dataId: 'id-8',
    image: {
      src: './img/sample/portfolio-min8.jpg'
    }
  },
  {
    dataId: 'id-9',
    image: {
      src: './img/sample/portfolio-min9.jpg'
    }
  },
  {
    dataId: 'id-10',
    image: {
      src: './img/sample/portfolio-min10.jpg'
    }
  },
  {
    dataId: 'id-11',
    image: {
      src: './img/sample/portfolio-min11.jpg'
    }
  },
  {
    dataId: 'id-12',
    image: {
      src: './img/sample/portfolio-min12.jpg'
    }
  },
  {
    dataId: 'id-13',
    image: {
      src: './img/sample/portfolio-min13.jpg'
    }
  },
  {
    dataId: 'id-14',
    image: {
      src: './img/sample/portfolio-min14.jpg'
    }
  },
  {
    dataId: 'id-15',
    image: {
      src: './img/sample/portfolio-min15.jpg'
    }
  },
  {
    dataId: 'id-16',
    image: {
      src: './img/sample/portfolio-min16.jpg'
    }
  },
  {
    dataId: 'id-17',
    image: {
      src: './img/sample/portfolio-min17.jpg'
    }
  },
  {
    dataId: 'id-18',
    image: {
      src: './img/sample/portfolio-min18.jpg'
    }
  },
  {
    dataId: 'id-19',
    image: {
      src: './img/sample/portfolio-min19.jpg'
    }
  },
  {
    dataId: 'id-20',
    image: {
      src: './img/sample/portfolio-min20.jpg'
    }
  },
  {
    dataId: 'id-21',
    image: {
      src: './img/sample/portfolio-min1.jpg'
    }
  },
  {
    dataId: 'id-22',
    image: {
      src: './img/sample/portfolio-min2.jpg'
    }
  },
  {
    dataId: 'id-23',
    image: {
      src: './img/sample/portfolio-min3.jpg'
    }
  },
  {
    dataId: 'id-24',
    image: {
      src: './img/sample/portfolio-min4.jpg'
    }
  },
  {
    dataId: 'id-25',
    image: {
      src: './img/sample/portfolio-min5.jpg'
    }
  },
  {
    dataId: 'id-26',
    image: {
      src: './img/sample/portfolio-min6.jpg'
    }
  },
  {
    dataId: 'id-27',
    image: {
      src: './img/sample/portfolio-min7.jpg'
    }
  },
  {
    dataId: 'id-28',
    image: {
      src: './img/sample/portfolio-min8.jpg'
    }
  },
  {
    dataId: 'id-29',
    image: {
      src: './img/sample/portfolio-min9.jpg'
    }
  },
  {
    dataId: 'id-30',
    image: {
      src: './img/sample/portfolio-min10.jpg'
    }
  },
  {
    dataId: 'id-31',
    image: {
      src: './img/sample/portfolio-min11.jpg'
    }
  },
  {
    dataId: 'id-32',
    image: {
      src: './img/sample/portfolio-min12.jpg'
    }
  },
  {
    dataId: 'id-33',
    image: {
      src: './img/sample/portfolio-min13.jpg'
    }
  },
  {
    dataId: 'id-34',
    image: {
      src: './img/sample/portfolio-min14.jpg'
    }
  },
  {
    dataId: 'id-35',
    image: {
      src: './img/sample/portfolio-min15.jpg'
    }
  },
  {
    dataId: 'id-36',
    image: {
      src: './img/sample/portfolio-min16.jpg'
    }
  },
  {
    dataId: 'id-37',
    image: {
      src: './img/sample/portfolio-min17.jpg'
    }
  },
  {
    dataId: 'id-38',
    image: {
      src: './img/sample/portfolio-min18.jpg'
    }
  },
  {
    dataId: 'id-39',
    image: {
      src: './img/sample/portfolio-min19.jpg'
    }
  },
  {
    dataId: 'id-40',
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
      countProjects: 10
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    let newPage = this.state.page;
    if(this.state.page < Math.floor(portfolio.length / this.state.countProjects)){
      newPage++;
    } else {
      newPage = 1;
    }
    this.setState({page: newPage});
  }

  prevPage() {
    let newPage = this.state.page;
    if(this.state.page > 1){
      newPage--;
    } else {
      newPage = Math.floor(portfolio.length / this.state.countProjects);
    }
    this.setState({page: newPage});
  }

  render() {
    let pageStart = (this.state.page - 1) * this.state.countProjects;
    let pageEnd = this.state.page * this.state.countProjects;

    return (
      <div id="contet-pages">
        <div id="text"><img src={require('./img/portfolio.png')} alt="" title="" /></div>
        <div id="stripe"></div>
        
        <ul className="portfolio-nav clearfix">
          <li className="segment-1 selected-1"><a href="#" data-value="all">All</a></li>
          <li className="segment-0"><a href="#" data-value="ford"><span>01</span>Ford Mustang</a></li>
          <li className="segment-2"><a href="#" data-value="mark"><span>02</span>Mark Sebastian</a></li>
          <li className="segment-3"><a href="#" data-value="cars"><span>03</span>Other cars</a></li>
          <li className="segment-4 last"><a href="#" data-value="monty"><span>04</span>Monty Python</a></li>
        </ul>
        
        <ul id="list" className="portfolio clearfix">
          {portfolio.slice(pageStart, pageEnd).map((item, index) => {
            return (
              <li key={index} data-id={item.dataId} className="ford">
                <Link to={`/portfolio/${item.dataId}`} rel="prettyPhoto[mixed]" title={item.dataId}>
                  <img title="" alt="" src={require('' + item.image.src)} />
                  <span className="portfolio-overlay">{item.dataId}</span>
                </Link>
              </li>
             );
          })}   
          
              

        </ul>
        
        <ul id="prev-next" className="clearfix">
          <li className="next"><a href="#" onClick={this.nextPage}></a></li>
          <li className="prev"><a href="#" onClick={this.prevPage}></a></li>
        </ul>
      </div>
    );
  }
};
