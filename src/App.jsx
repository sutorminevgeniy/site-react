import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import router from './router';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);