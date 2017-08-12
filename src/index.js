import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Switch takes in collection of routes, only render the first route that matches current url
//BrowserRouter interact with History package
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Sandbox from './components/sandbox';
import Auth from './components/auth';
import Code from './components/code';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//http://localhost:9001/?code=Yh9dStY8TK
//<Route path="/auth/:code=123" search={'searchvalue'} component={Auth} />
//http://localhost:8080/test/?code=Yh9dStY8TK
//http://localhost:8080/auth/code=Yh9dStY8TK
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} /> {/* most specific need to be at the top */}
          <Route path="/posts/:id" component={PostsShow} /> {/* route order is very important, else you get wrong route */}
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/auth/:code" component={Auth} />
          <Route path="/test" query={{code: 'code'}} component={Code} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
