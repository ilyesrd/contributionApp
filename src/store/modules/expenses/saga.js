import {put, call, takeEvery} from 'redux-saga/effects';
import * as Actions from './constants';

import {getExpenses} from './service';

/**
 * Fetch data saga
 * @returns {IterableIterator<*>}
 */
function* fetchExpensesSaga() {
  try {
    const data = yield call(getExpenses);
    yield put({type: Actions.GET_EXPENSES_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: Actions.GET_EXPENSES_ERROR, error: e});
  }
}

export default function* expensesSaga() {
  yield takeEvery(Actions.GET_EXPENSES, fetchExpensesSaga);
}
