import { combineReducers } from 'redux';

// Reducers
import portfolioReducer from './portfolio-reducer';
import projectReducer from './project-reducer';

// Combine Reducers
var reducers = combineReducers({
    portfolioState: portfolioReducer,
    projectState:   projectReducer
});

export default reducers;
