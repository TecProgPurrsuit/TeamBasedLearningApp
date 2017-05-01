import { combineReducers } from 'redux';
import { allLists, availableLists, unavailableLists } from './reducerFakeData';
import SelectTypeOfAnswer from './reducerSelectTypeOfAnswer';
import CurrentUserReducer from './reducerCurrentUser';

const rootReducer = combineReducers({
  questionListData: allLists,
  unavailableListsData: unavailableLists,
  availableListsData: availableLists,
  typeOfAnswering: SelectTypeOfAnswer,
  currentUser: CurrentUserReducer,
});

export default rootReducer;
