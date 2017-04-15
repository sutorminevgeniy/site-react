import { combineReducers } from 'redux';

// Reducers
import portfolioReducer from './portfolio-reducer';

// Combine Reducers
var reducers = combineReducers({
    portfolioState: portfolioReducer
});

export default reducers;
