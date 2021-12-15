import {createSelector} from 'reselect';

export const expenses = state => state.expenses;
export const expensesSelector = createSelector(expenses, data => {
  return data ? data.toJS() : [];
});
