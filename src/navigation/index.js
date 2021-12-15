import * as React from 'react';
import Users from '../screens/admin/Users';
import Expenses from '../screens/admin/Expenses';
import NewExpense from '../screens/admin/NewExpense';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const HomeStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

export default function Router() {
  return (
    <Tab.Navigator
      activeColor="#fff"
      initialRouteName="Expenses"
      barStyle={{backgroundColor: 'teal'}}>
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="domain" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NewExpense"
        component={NewExpense}
        options={{
          tabBarLabel: 'New Expense',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bank-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
