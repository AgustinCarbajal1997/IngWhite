import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './drawer';
const Navigator = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Navigator;
