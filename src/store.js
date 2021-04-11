import { createUser, combineReducers } from 'redux';
import homePage from './containers/HomPage/reducer';

const reducers = combineReducers({homPage});

export default createStore(reducers);