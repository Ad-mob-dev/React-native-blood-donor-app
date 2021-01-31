import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import CustomStack from './config/stacknav';
import {NavigationContainer} from '@react-navigation/native';

const App  = () => {
  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
      <CustomStack/>
      </NavigationContainer>
    </Provider>
    </>
  );
};
 
export default App;
