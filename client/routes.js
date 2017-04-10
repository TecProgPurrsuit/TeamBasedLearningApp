/**
* This file is where the route paths is initialized.
*
* @summary Route paths.
*
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import QuestionList from './containers/questionList';
import GroupAnswering from './containers/groupAnswering';
import IndividualAnswering from './containers/individualAnswering';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={QuestionList} />
    <Route path="/group-simulator" component={GroupAnswering} />
    <Route path="/individual-simulator" component={IndividualAnswering} />
  </Route>
);
