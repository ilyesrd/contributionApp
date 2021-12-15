import {all} from 'redux-saga/effects';

import expensesSaga from './modules/expenses/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([expensesSaga()]);
}
