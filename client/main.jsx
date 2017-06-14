/**
* This file is where the Meteor startup and the providers is rendered.
*
* @summary Meteor startup.
*
* @link /
*/

import React from 'react';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import { Meteor } from 'meteor/meteor';

// Organize all middleware plugins of application
const createStoreWithMiddleware = applyMiddleware(
  promise, thunk,
)(createStore);

/* global Meteor inicialization */
Meteor.startup(() => {
  // This function allows the database data to be shown in client side
  Meteor.subscribe('Lists');

  // render the middleware plugins and routes to document with id container
  render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('container'));

});
