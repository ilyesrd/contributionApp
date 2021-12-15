import React from 'react';
import type {Node} from 'react';
import Router from './navigation';
import {Provider} from 'react-redux';
import configureStore from './store';
import NavigationService from './utils/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {store, persistor} = configureStore();

const App: () => Node = () => {
  return (
    <NavigationContainer
      ref={navigationRef =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
