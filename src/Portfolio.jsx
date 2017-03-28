import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
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
        
          <li data-id="id-1" className="ford">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min1.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>

              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big1.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-2" className="ford">
          
            <img title="" alt="" src={require('./img/sample/portfolio-min2.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>
              <p className="info-desc">Vivamus congue magna eget sem rutrum a feugiat augue eleifend.</p>
              <div className="enlarge"><a href="img/sample/portfolio-big2.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
            </div>  
          
          </li>
              
          <li data-id="id-3" className="ford">
          
            <img title="" alt="" src={require('./img/sample/portfolio-min3.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big3.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-4" className="ford">
          
            <a href="img/sample/portfolio-big4.jpg" rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={require('./img/sample/portfolio-min4.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          
          </li>
              
          <li data-id="id-5" className="mark">
          
            <img title="" alt="" src={require('./img/sample/portfolio-min5.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big5.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>  
          
          </li>
          
          <li data-id="id-6" className="mark">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min6.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>
              
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big6.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-7" className="mark">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min7.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>
              <p className="info-desc">Vivamus congue magna eget sem rutrum a feugiat augue eleifend.</p>
              <div className="enlarge"><a href="img/sample/portfolio-big7.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
            </div>  
          
          </li>
              
          <li data-id="id-8" className="mark">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min8.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big8.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-9" className="mark">
            
            <a href="img/sample/portfolio-big9.jpg" rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={require('./img/sample/portfolio-min9.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          
          </li>
              
          <li data-id="id-10" className="mark">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min10.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big10.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>  
          
          </li>
          
          <li data-id="id-11" className="mark">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min11.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>

              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big11.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-12" className="mark">
          
            <img title="" alt="" src={require('./img/sample/portfolio-min12.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>
              <p className="info-desc">Vivamus congue magna eget sem rutrum a feugiat augue eleifend.</p>
              <div className="enlarge"><a href="img/sample/portfolio-big12.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
            </div>  
          
          </li>
              
          <li data-id="id-13" className="cars">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min13.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big13.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-14" className="cars">
            
            <a href="img/sample/portfolio-big14.jpg" rel="prettyPhoto[mixed]" title="Enlarge image">
              <img title="" alt="" src={require('./img/sample/portfolio-min14.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          
          </li>
              
          <li data-id="id-15" className="cars">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min15.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big15.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>  
          
          </li>
          
          
          <li data-id="id-16" className="cars">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min16.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>

              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big16.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-17" className="cars">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min17.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Project name</p>
              <p className="info-desc">Vivamus congue magna eget sem rutrum a feugiat augue eleifend.</p>
              <div className="enlarge"><a href="img/sample/portfolio-big17.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
            </div>  
          
          </li>
              
          <li data-id="id-18" className="cars">
          
            <img title="" alt="" src={require('./img/sample/portfolio-min18.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="enlarge"><a href="img/sample/portfolio-big18.jpg" title="Enlarge image" rel="prettyPhoto[mixed]"></a></div>
              <div className="visit"><a href="#" title="Visit website"></a></div>
            </div>        
          
          </li>
              
          <li data-id="id-19" className="monty">
            
            <a href="http://www.youtube.com/watch?v=M68GeL8PafE" rel="prettyPhoto[mixed]">
              <img title="" alt="" src={require('./img/sample/portfolio-min19.jpg')} />
              <span className="portfolio-overlay"></span>
            </a>
          
          </li>
              
          <li data-id="id-20" className="monty">
            
            <img title="" alt="" src={require('./img/sample/portfolio-min20.jpg')} />
            <span className="portfolio-overlay"></span>
            
            <div className="info">
              <p className="info-title">Monty Python - Silly Job Interview </p>
    
              <div className="read-more"><a href="project.html" title="Read more"></a></div>
              <div className="play"><a href="http://www.youtube.com/watch?v=1dWMIuipn_c" rel="prettyPhoto[mixed]"></a></div>
            </div>  
          
          </li>
        </ul>
        
        <ul id="prev-next" className="clearfix">
          <li className="next"><a href="#"></a></li>
          <li className="prev"><a href="#"></a></li>
        </ul>
      </div>
    );
  }
};
