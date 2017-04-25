import { combineReducers } from 'redux';
import QuestionsReducer from './reducerFakeData';
import SelectTypeOfAnswer from './reducerSelectTypeOfAnswer';
import CurrentUserReducer from './reducerCurrentUser';

const rootReducer = combineReducers({
  questionListData: QuestionsReducer,
  typeOfAnswering: SelectTypeOfAnswer,
  currentUser: CurrentUserReducer,
});

export default rootReducer;
