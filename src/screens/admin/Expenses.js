import * as React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {fetchExpenses} from '../../store/modules/expenses/actions';
import {expensesSelector} from '../../store/modules/expenses/selectors';

function Expenses({expenses, handleFetchExpenses}) {
  React.useEffect(() => {
    handleFetchExpenses();
  }, [handleFetchExpenses]);

  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    expenses: expensesSelector(state),
  };
};

const mapDispatchToProps = {
  handleFetchExpenses: fetchExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
