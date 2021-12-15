import * as Actions from './constants';

/**
 * Fetch Expenses
 * @returns {{type: string}}
 */
export function fetchExpenses() {
  return {
    type: Actions.GET_EXPENSES,
  };
}
