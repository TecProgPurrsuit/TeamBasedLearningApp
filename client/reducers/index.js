import { combineReducers } from 'redux';
import AllLists from './reducerAllLists';
import AvailableLists from './reducerAvailableLists';
import UnavailableLists from './reducerUnavailableLists';
import SelectTypeOfAnswer from './reducerSelectTypeOfAnswer';
import CurrentUserReducer from './reducerCurrentUser';

const rootReducer = combineReducers({
  questionListData: AllLists,
  unavailableListsData: UnavailableLists,
  availableListsData: AvailableLists,
  typeOfAnswering: SelectTypeOfAnswer,
  currentUser: CurrentUserReducer,
});

export default rootReducer;
