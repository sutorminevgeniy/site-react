import React, { Component } from 'react';

import ReactDOM from 'react-dom';
// import { Switch, Router, Route } from 'react-router'
import { Route, Router, browserHistory } from 'react-router'

import './css/style.scss';

import Resume from './Resume';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import Contact from './Contact';

class NotFound extends Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <Switch>
//         <Route path="/" component={Resume} />
//         <Route path="contact" component={Contact} />
//     </Switch>,
//     document.getElementById("root")
// )

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Resume} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="project" component={Project} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById("root")
)