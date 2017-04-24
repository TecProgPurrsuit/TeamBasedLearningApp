/**
* This file is where the route paths is initialized.
*
* @summary Route paths.
*
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import QuestionList from './containers/questions/questionList';
import GroupAnswer from './containers/groupAnswer';
import IndividualAnswer from './containers/individualAnswer';
import AvailableQuestions from './containers/availableQuestions';
import Login from './components/auth/login';
import Register from './components/auth/register';
import ListCreator from './containers/creators/listCreator';

export default (
  <Route path="/" component={App}>
    <Route path="/group-simulator" component={GroupAnswer} />
    <Route path="/individual-simulator" component={IndividualAnswer} />
    <Route path="/available-questions" component={AvailableQuestions} />
    <Route path="/create-list" component={ListCreator} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Route>
);
