/**
* This file is where the Meteor startup and the providers is rendered.
*
* @summary Meteor startup.
*
* @link /
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';
import { Meteor } from 'meteor/meteor';


const CREATESTOREWITHMIDDLEWARE = applyMiddleware()(createStore);


Meteor.startup(() => {
  // This function allows the database data to be shown in client side
  Meteor.subscribe('Lists');

  render(
    <Provider store={CREATESTOREWITHMIDDLEWARE(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.getElementById('container'));

});
