import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const RootStack = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootStack;
