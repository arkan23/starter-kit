import { combineReducers } from 'redux';
import Lists from './lists';
import Salex from './salex';

const rootReducer = combineReducers({
    lists: Lists,
    salex: Salex
});

export default rootReducer;
