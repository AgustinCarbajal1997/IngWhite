import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Alerts from '../../screens/Alerts';
import {getHeaderTitle} from '@react-navigation/elements';
import HeaderDefault from '../../components/Header/HeaderDefault';
import type {StackNavigationOptions} from '@react-navigation/stack';

type AlertStackParamList = {
  Alertas: undefined;
};

const stackOptions: StackNavigationOptions = {
  title: 'Alertas',
  header: ({navigation, route, options}) => {
    const title = getHeaderTitle(options, route.name);
    return <HeaderDefault title={title} navigation={navigation} />;
  },
};

const Stack = createStackNavigator<AlertStackParamList>();

const AlertsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Alertas" component={Alerts} options={stackOptions} />
    </Stack.Navigator>
  );
};

export default AlertsStack;
