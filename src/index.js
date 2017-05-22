import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/bulma.css';
import './css/font-awesome.css';
import './css/App.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/main.reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={ArticleList}/>
      </Route>
    </Router>
  </Provider>, 
document.getElementById('app'));
