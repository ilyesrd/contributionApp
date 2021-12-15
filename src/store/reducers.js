import {combineReducers} from 'redux';

import expensesReducer from './modules/expenses/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  expenses: expensesReducer,
});

export default rootReducers;
